import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import { useState } from "react";

function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  return (
    <>
      <div className="conatiner mt-24">
        <div className="w-full p-6 lg:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center">
            HAVE SOME QUESTIONS, ISSUES OR COMMENTS?
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed font-normal text-center">
            At Sellwin Holdings (Pvt) Ltd, we value open communication and are
            always here to assist you with your needs. Whether you have
            questions about our products, need support, or want to discuss a
            potential partnership, we are ready to help. <br /> <br />
          </p>
        </div>

        <div className="">
          <div className="">
            <div className="relative isolate px-6 lg:px-8">
              {/* Background Gradient (Top) */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none z-[-1]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00509E] to-[#65cdac] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#00509E] sm:text-5xl">
                  Contact sales
                </h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                  You can also reach us by filling the contact form below.
                  Please provide as much information as possible so we can
                  assist you promptly.
                </p>
              </div>
              <div className="flex mx-20">
                <div className="">
                  <form
                    action="#"
                    method="POST"
                    className="mx-auto  max-w-xl sm:mt-10"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="first-name"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          First name
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            className="block w-full rounded-md px-3.5 py-2 text-base border border-[#00509E] text-gray-900  placeholder:text-gray-600  focus:outline-blue-600 "
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="last-name"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Company
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="email"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Email
                        </label>
                        <div className="mt-2.5">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="phone-number"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="mt-2.5">
                          <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                              <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                aria-label="Country"
                                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                              >
                                <option>US</option>
                                <option>CA</option>
                                <option>EU</option>
                              </select>
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </div>
                            <input
                              id="phone-number"
                              name="phone-number"
                              type="text"
                              placeholder="123-456-7890"
                              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm/6 font-semibold text-gray-900"
                        >
                          Message
                        </label>
                        <div className="mt-2.5">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                          <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                          >
                            <span className="sr-only">Agree to policies</span>
                            <span
                              aria-hidden="true"
                              className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                            />
                          </Switch>
                        </div>
                        <Label className="text-sm/6 text-gray-600">
                          By selecting this, you agree to our{" "}
                          <a href="#" className="font-semibold text-indigo-600">
                            privacy&nbsp;policy
                          </a>
                          .
                        </Label>
                      </Field>
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Let's talk
                      </button>
                    </div>
                    {/* Background Gradient (Bottom) */}
                  </form>
                </div>
                <div className="ml-24 mt-10">
                  <h2 className="ml-64 mt-12">Get In Touch </h2>
                  <div className="ml-64  mt-5">
                    <FontAwesomeIcon icon="phone" /> 071-1497-951
                  </div>
                  <div className="ml-64  mt-2">
                    <FontAwesomeIcon icon="envelope" /> info@sellwin.lk
                  </div>
                  <div className="ml-64 mt-2">
                    <FontAwesomeIcon icon="location-dot" /> 8th mile post <br />
                    Habarana
                  </div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none z-[-1]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00509E] to-[#FFD700] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
