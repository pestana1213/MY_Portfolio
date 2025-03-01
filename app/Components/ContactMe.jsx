"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactMe = () => {
    const { 
        register, 
        handleSubmit, 
        reset, // Add reset method from useForm
        formState: { errors } 
      } = useForm();

  const onSubmit = (data) => {
    var messageToSend = {
        subject: "New message from your portfolio",
        mensagem: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 20px auto; background-color: #f7fafc; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h1 style="color: #2d3748; font-size: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 25px;">
                    New Contact Form Submission
                </h1>

                <div style="margin-bottom: 20px;">
                    <div style="display: flex; margin-bottom: 15px; padding: 12px; background-color: white; border-radius: 6px;">
                        <strong style="width: 80px; color: #4a5568;">Name:</strong>
                        <div style="color: #2d3748;">${data.name}</div>
                    </div>

                    <div style="display: flex; margin-bottom: 15px; padding: 12px; background-color: white; border-radius: 6px;">
                        <strong style="width: 80px; color: #4a5568;">Email:</strong>
                        <div style="color: #2d3748;">${data.email}</div>
                    </div>

                    <div style="padding: 12px; background-color: white; border-radius: 6px;">
                        <div style="margin-bottom: 10px; color: #4a5568; font-weight: bold;">Message:</div>
                        <div style="color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${data.message}</div>
                    </div>
                </div>

                <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 12px;">
                    This email was sent from the contact form on your website.
                </div>
            </div>
        </body>
        </html>
        `
    };

    const response = fetch("/api/sendEmail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageToSend)
    });

    reset();
  };

  return (
    <section id="contact-me" className="relative py-20 px-4 bg-gradient-to-br ">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Have a project in mind? Let's make it happen!
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                  </div>

                  <div>
                    <input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                  </div>

                  <div>
                    <textarea
                      {...register("message", { required: true })}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">Message is required</span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;