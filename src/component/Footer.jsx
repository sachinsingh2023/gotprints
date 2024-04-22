import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="bg-white text-black  border  mt-5">
    <div class="container mx-auto p-0 md:p-8 xl:px-0">
        <div class="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-4">
                    <div>
                        <a href="/">
                            <div class="flex items-center space-x-2 text-2xl font-medium">
                                <span>
                                    <img src="https://www.oblprint.com/assets/images/obl-print-logo.svg" alt="AI Logo"
                                        width="200" height="64" class="w-94"></img>
                                </span>
                            
                            </div>

                        </a>
                    </div>
                    <div class="max-w-md pr-16 text-md text-black">Enhance productivity and
                        efficiency with cutting-edge artificial intelligence solutions for your business operations.
                    </div>
                    <div class="flex space-x-2">
                        <a href="" target="_blank" class="text-black hover:text-black">
                            <span class="sr-only">Linkedin</span><svg fill="currentColor" viewBox="0 0 24 24"
                                class="h-6 w-6" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="" target="_blank" class="text-black hover:text-black">
                            <span class="sr-only">Twitter</span><svg fill="currentColor" viewBox="0 0 24 24"
                                class="h-6 w-6" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="/aiplatform"
                                        class="text-md leading-6 text-black ">AI Platform
                                    </a>
                                </li>
                                <li>
                                    <a href="/aialgorithms"
                                        class="text-md leading-6 text-black ">AI Algorithms
                                    </a>
                                </li>
                                <li>
                                    <a href="/industryapplications"
                                        class="text-md leading-6 text-black ">Industry
                                        Applications
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-md font-semibold leading-6 text-white">Use Cases</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="/predictiveanalysis"
                                        class="text-md leading-6 text-black ">Predictive
                                        Analysis
                                    </a>
                                </li>
                                <li>
                                    <a href="/customerexperience"
                                        class="text-md leading-6 text-black ">Customer
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="/automation"
                                        class="text-md leading-6 text-black ">Automation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h3 class="text-md font-semibold leading-6 text-white">Resources</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="/pricing"
                                        class="text-md leading-6 text-black ">Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" class="text-md leading-6 text-black ">Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="/casestudies"
                                        class="text-md leading-6 text-black ">Case Studies
                                    </a>
                                </li>
                                <li>
                                    <a href="/terms" class="text-md leading-6 text-black ">Terms
                                        of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="/privacy"
                                        class="text-md leading-6 text-black ">Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 md:mt-0">
                            <h3 class="text-md font-semibold leading-6 text-white">Company</h3>
                            <ul role="list" class="mt-6 space-y-4">
                                <li>
                                    <a href="/aboutus"
                                        class="text-md leading-6 text-black ">About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers"
                                        class="text-md leading-6 text-black ">Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="/contactus"
                                        class="text-md leading-6 text-black ">Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          <hr />
          <div>
            <p>© Copyright 2024. All Rights Reserved <a href="https://www.linkedin.com/in/sachin-singh-8a3a7a294/" className='text-blue-500'>Sachin singh</a></p>
          </div>
        </div>
    </div>
</footer></>
  )
}

export default Footer