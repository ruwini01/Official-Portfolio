"use client";
import React, { useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendemail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="flex flex-col items-center min-h-screen mt-32 lg:mt-0 scroll-mt-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="w-full flex flex-col items-center justify-center">
                <SectionHeading>Contact Me</SectionHeading>
                <p className="text-gray-700 dark:text-[#c9c9c9dc] text-center ml-6 mr-6 -mt-4">
                    Contact me directly at{' '}
                    <a className="underline" href="mailto:ruwini0213@gmail.com">
                        ruwini0213@gmail.com
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
                        // Clear input fields
                        setSenderEmail('');
                        setMessage('');
                    }}
                >
                    <input
                        className="h-14 rounded-lg border border-black/10 dark:bg-[#615f5f7d] p-4 md:w-96 w-full"
                        name="senderEmail"
                        type="email"
                        required
                        maxLength={500}
                        placeholder="Your email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                    />
                    <textarea
                        className="h-52 my-3 rounded-lg border border-black/10 dark:bg-[#615f5f7d] p-4 md:w-96 w-full"
                        name="message"
                        placeholder="Your message"
                        required
                        maxLength={500}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <SubmitBtn />
                </form>
            </div>
        </motion.section>
    );
}
