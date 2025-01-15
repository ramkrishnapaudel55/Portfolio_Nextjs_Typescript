// src/components/sections/Contact.tsx
"use client";

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Download, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

// Infer the type of the form values from the Zod schema
type FormValues = z.infer<typeof formSchema>;

const onSubmit = async (values: FormValues) => {
  setSending(true);
  setStatus({ type: '', message: '' });

  try {
    const response = await emailjs.send(
      'service_w8johgi',
      'template_titdxpn',
      {
        from_name: values.name,
        reply_to: values.email,
        message: values.message,
      },
      'nsIvoDY9isIRq7FpD'
    );

    if (response.status === 200) {
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      form.reset();
    }
  } catch (error) {
    setStatus({
      type: 'error',
      message: 'Failed to send message. Please try again later.',
    });
  } finally {
    setSending(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message..."
                      className="resize-none"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="submit" disabled={sending}>
                {sending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => window.open('./RamKrishna_CV.pdf', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </form>
        </Form>

        {status.message && (
          <Alert
            variant={status.type === 'success' ? 'default' : 'destructive'}
            className="mt-6"
          >
            <AlertDescription>
              {status.message}
            </AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  );
};

export default Contact;