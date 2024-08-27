"use client";
import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendemail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    // Create refs for the input and textarea elements
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    return (
        <motion.section
            id='contact'
            ref={ref}
            className="flex flex-col items-center min-h-screen mt-32 lg:mt-0 scroll-mt-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="w-full flex flex-col items-center justify-center">
                <SectionHeading>Contact Me</SectionHeading>
                <p className="text-gray-700 text-center ml-6 mr-6 -mt-4">
                    Contact me directly at{' '}
                    <a className="underline" href="mailto:12345tharanga12345@gmail.com">
                        ruwini@gmail.com
                    </a>{' '}
                    or through this form.
                </p>
                <form
                    className="mt-10 flex flex-col"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData);
                        if (error) {
                            toast.error(error);
                            return;
                        }
                        toast.success('Email sent successfully!');

                        // Clear the input fields
                        if (emailRef.current) emailRef.current.value = '';
                        if (messageRef.current) messageRef.current.value = '';
                    }}
                >
                    <input
                        className="h-14 rounded-lg border border-black/10 p-4 md:w-96 w-full"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={500}
                        placeholder="Your email"
                        ref={emailRef} // Attach ref to the input
                    />
                    <textarea
                        className="h-52 my-3 rounded-lg border border-black/10 p-4 md:w-96 w-full"
                        name="message"
                        placeholder="Your message"
                        required
                        maxLength={500}
                        ref={messageRef} // Attach ref to the textarea
                    />
                    <SubmitBtn />
                </form>
            </div>
        </motion.section>
    );
}
