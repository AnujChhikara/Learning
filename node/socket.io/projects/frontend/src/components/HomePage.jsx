"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { MountainIcon, CheckCircle, Star, ArrowRight } from "lucide-react";

export default function Homepage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      comment:
        "CollabWebDev has revolutionized our team's workflow. It's intuitive and powerful!",
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      comment:
        "The real-time collaboration features have significantly improved our productivity.",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      comment:
        "I love how easy it is to share designs and get feedback from the team.",
    },
  ];

  return (
    <div className=''>
      <motion.header
        className='px-4 lg:px-6 h-14 flex items-center'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link className='flex items-center justify-center' href='#'>
          <MountainIcon className='h-6 w-6 mr-2' />
          <span className='font-bold'>CollabWebDev</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#features'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#future'
          >
            Future Plans
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#difference'
          >
            Why Us
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#testimonials'
          >
            Testimonials
          </Link>
        </nav>
      </motion.header>
      <main className='flex flex-col'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <motion.div
            className='container px-4 md:px-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              className='flex flex-col items-center space-y-4 text-center'
              variants={itemVariants}
            >
              <motion.div className='space-y-2' variants={itemVariants}>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                  Collaborate on Web Projects with Ease
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Streamline your web development process. Manage projects,
                  tasks, and team communication all in one place.
                </p>
              </motion.div>
              <motion.div className='space-x-4' variants={itemVariants}>
                <Button asChild>
                  <Link href='/signup'>Get Started</Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='/learn-more'>Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <motion.div
            className='container px-4 md:px-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h2
              className='text-3xl font-bold text-center mb-12'
              variants={itemVariants}
            >
              What We're Doing
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-6'
              variants={containerVariants}
            >
              <motion.div
                className='flex flex-col items-center text-center'
                variants={itemVariants}
              >
                <CheckCircle className='h-12 w-12 mb-4 text-green-500' />
                <h3 className='text-xl font-semibold mb-2'>
                  Real-time Collaboration
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Work together seamlessly with your team, no matter where they
                  are.
                </p>
              </motion.div>
              <motion.div
                className='flex flex-col items-center text-center'
                variants={itemVariants}
              >
                <CheckCircle className='h-12 w-12 mb-4 text-green-500' />
                <h3 className='text-xl font-semibold mb-2'>Task Management</h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Organize and track your project tasks with ease and
                  efficiency.
                </p>
              </motion.div>
              <motion.div
                className='flex flex-col items-center text-center'
                variants={itemVariants}
              >
                <CheckCircle className='h-12 w-12 mb-4 text-green-500' />
                <h3 className='text-xl font-semibold mb-2'>
                  Version Control Integration
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  Seamlessly integrate with popular version control systems.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id='future' className='w-full py-12 md:py-24 lg:py-32'>
          <motion.div
            className='container px-4 md:px-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h2
              className='text-3xl font-bold text-center mb-12'
              variants={itemVariants}
            >
              What We're Planning
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 gap-6'
              variants={containerVariants}
            >
              <motion.div
                className='flex items-start space-x-4'
                variants={itemVariants}
              >
                <ArrowRight className='h-6 w-6 mt-1 text-blue-500' />
                <div>
                  <h3 className='text-xl font-semibold mb-2'>
                    AI-Powered Code Suggestions
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Implement machine learning algorithms to provide intelligent
                    code suggestions and autocompletions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className='flex items-start space-x-4'
                variants={itemVariants}
              >
                <ArrowRight className='h-6 w-6 mt-1 text-blue-500' />
                <div>
                  <h3 className='text-xl font-semibold mb-2'>
                    Advanced Analytics Dashboard
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Develop a comprehensive analytics suite to track project
                    progress and team performance.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className='flex items-start space-x-4'
                variants={itemVariants}
              >
                <ArrowRight className='h-6 w-6 mt-1 text-blue-500' />
                <div>
                  <h3 className='text-xl font-semibold mb-2'>
                    Mobile App Development
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Create native mobile applications for iOS and Android to
                    enable on-the-go collaboration.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className='flex items-start space-x-4'
                variants={itemVariants}
              >
                <ArrowRight className='h-6 w-6 mt-1 text-blue-500' />
                <div>
                  <h3 className='text-xl font-semibold mb-2'>
                    Integrated CI/CD Pipeline
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Build a robust CI/CD pipeline directly into the platform for
                    seamless deployment.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section
          id='difference'
          className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'
        >
          <motion.div
            className='container px-4 md:px-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h2
              className='text-3xl font-bold text-center mb-12'
              variants={itemVariants}
            >
              How We're Different
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
              variants={containerVariants}
            >
              <motion.div className='space-y-4' variants={itemVariants}>
                <h3 className='text-2xl font-semibold'>GitHub</h3>
                <ul className='space-y-2'>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Integrated project management tools</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Real-time collaboration features</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Built-in communication tools</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div className='space-y-4' variants={itemVariants}>
                <h3 className='text-2xl font-semibold'>Other Platforms</h3>
                <ul className='space-y-2'>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Focused on web development workflows</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Seamless integration of design and development</span>
                  </li>
                  <li className='flex items-center space-x-2'>
                    <CheckCircle className='h-5 w-5 text-green-500' />
                    <span>Customizable to your team's specific needs</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id='testimonials' className='w-full py-12 md:py-24 lg:py-32'>
          <motion.div
            className='container px-4 md:px-6'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.h2
              className='text-3xl font-bold text-center mb-12'
              variants={itemVariants}
            >
              What Our Users Say
            </motion.h2>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className='space-y-4'
                  variants={itemVariants}
                >
                  <Card>
                    <CardContent className='p-6'>
                      <div className='flex items-center space-x-4 mb-4'>
                        <Star className='h-6 w-6 text-yellow-500' />
                        <Star className='h-6 w-6 text-yellow-500' />
                        <Star className='h-6 w-6 text-yellow-500' />
                        <Star className='h-6 w-6 text-yellow-500' />
                        <Star className='h-6 w-6 text-yellow-500' />
                      </div>
                      <p className='text-gray-600 dark:text-gray-300 mb-4'>
                        {testimonial.comment}
                      </p>
                      <div>
                        <p className='font-semibold'>{testimonial.name}</p>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <motion.footer
        className='w-full py-6 bg-gray-100 dark:bg-gray-800'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container px-4 md:px-6'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div className='space-y-4'>
              <Link className='flex items-center space-x-2' href='#'>
                <MountainIcon className='h-6 w-6' />
                <span className='font-bold'>CollabWebDev</span>
              </Link>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Empowering web development teams to collaborate and innovate.
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Product</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Features
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Company</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    About
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Legal</h3>
              <ul className='space-y-2'>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className='text-sm hover:underline' href='#'>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-200 dark:border-gray-700'>
            <p className='text-xs text-center text-gray-500 dark:text-gray-400'>
              © 2024 CollabWebDev. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
