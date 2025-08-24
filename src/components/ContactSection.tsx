import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Envelope,
  WhatsappLogo,
  PaperPlaneTilt,
  ArrowRight,
} from "phosphor-react";
import { SiTelegram } from "react-icons/si";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.set(".contact-element", {
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      });

      gsap.set(".social-icon", {
        opacity: 0,
        scale: 0.5,
        rotation: -180,
      });


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".contact-element", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }).to(
        ".social-icon",
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );


      const inputs = formRef.current?.querySelectorAll("input, textarea");
      inputs?.forEach((input) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            boxShadow: "0 0 20px rgba(64, 165, 255, 0.3)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });


      const submitButton = formRef.current?.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.addEventListener("mouseenter", () => {
          if (!submitButton.disabled) {
            gsap.to(submitButton, {
              scale: 1.05,
              filter: "brightness(1.1)",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        submitButton.addEventListener("mouseleave", () => {
          if (!submitButton.disabled) {
            gsap.to(submitButton, {
              scale: 1,
              filter: "brightness(1)",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      }


      document.querySelectorAll(".social-icon").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 5,
            boxShadow: "0 0 20px rgba(64, 165, 255, 0.5)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');


    const submitBtn = e.currentTarget.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    try {

      const formData = new FormData(formRef.current!);
      const templateParams = {

        user_name: formData.get('user_name'),
        from_name: formData.get('user_name'),
        name: formData.get('user_name'),
        
        user_email: formData.get('user_email'),
        from_email: formData.get('user_email'),
        email: formData.get('user_email'),
        reply_to: formData.get('user_email'),
        
        message: formData.get('message'),
        user_message: formData.get('message'),
        project: formData.get('message'),
        
        to_name: 'Shubham Karande', // Your name for the email
        to_email: 'shubhamkarande94@gmail.com',
      };

      console.log('Sending email with data:', templateParams);


      const result = await emailjs.send(
        'service_gwf8eq5',
        'template_ub2s5kr',
        templateParams,
        {
          publicKey: 'pVCQY7SSXmsB5T0ro',
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      

      if (formRef.current) {
        formRef.current.reset();
      }


      gsap.to(submitBtn, {
        backgroundColor: '#10b981',
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      console.error('Error details:', error);
      setSubmitStatus('error');


      gsap.to(submitBtn, {
        backgroundColor: '#ef4444',
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    } finally {
      setIsSubmitting(false);
      

      setTimeout(() => {
        setSubmitStatus('idle');
        gsap.to(submitBtn, {
          backgroundColor: '',
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 lg:px-20"
      data-scroll-section
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="contact-element text-section gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="contact-element text-xl text-foreground/70">
            Ready to bring your ideas to life? Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Talk to me */}
          <div className="flex flex-col">
            <div className="contact-element text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Talk to me
              </h3>
            </div>

            <div className="flex flex-col space-y-4">
              {/* Email */}
              <div className="contact-element glass-card p-5 rounded-2xl text-center hover:glow-blue transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 bg-neon-blue/20 rounded-lg">
                    <Envelope size={28} className="text-neon-blue" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  Email
                </h4>
                <p className="text-foreground/70 mb-3 text-xs">
                  shubhamkarande94@gmail.com
                </p>
                <a
                  href="mailto:shubhamkarande94@gmail.com"
                  className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-neon-blue transition-colors duration-300 text-xs"
                >
                  Write Me <ArrowRight size={14} />
                </a>
              </div>

              {/* WhatsApp */}
              <div className="contact-element glass-card p-5 rounded-2xl text-center hover:glow-green transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 bg-green-500/20 rounded-lg">
                    <WhatsappLogo size={28} className="text-green-400" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  WhatsApp
                </h4>
                <p className="text-foreground/70 mb-3 text-xs">
                  8108868025
                </p>
                <a
                  href="https://wa.me/918108868025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-green-400 transition-colors duration-300 text-xs"
                >
                  Write Me <ArrowRight size={14} />
                </a>
              </div>

              {/* Telegram */}
              <div className="contact-element glass-card p-5 rounded-2xl text-center hover:glow-blue transition-all duration-300">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 bg-blue-500/20 rounded-lg">
                    <SiTelegram size={28} className="text-blue-400" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  Telegram
                </h4>
                <p className="text-foreground/70 mb-3 text-xs">
                  stfushubham09
                </p>
                <a
                  href="https://t.me/stfushubham09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-blue-400 transition-colors duration-300 text-xs"
                >
                  Write Me <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col">
            <div className="contact-element text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Write me your project
              </h3>
            </div>

            <div className="flex flex-col">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="contact-element">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Type your name"
                    className="glass-card border-glass-border bg-background-secondary/50 focus:border-neon-blue focus:ring-neon-blue/20"
                    required
                  />
                </div>

                <div className="contact-element">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Mail
                  </label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Enter your Email"
                    className="glass-card border-glass-border bg-background-secondary/50 focus:border-neon-blue focus:ring-neon-blue/20"
                    required
                  />
                </div>

                <div className="contact-element">
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Project
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Write your project"
                    rows={6}
                    className="glass-card border-glass-border bg-background-secondary/50 focus:border-neon-blue focus:ring-neon-blue/20"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-element w-full bg-gradient-neon border-0 text-background font-semibold py-3 shadow-glow-neon hover:shadow-glow-neon transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </div>
                  ) : submitStatus === 'error' ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Failed to Send
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Let's Go!
                      <PaperPlaneTilt size={20} />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
