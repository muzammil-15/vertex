import { useState } from "react";

export default function Index() {
  return (
    <div className="min-h-screen bg-neutral-black-1000 text-neutral-white-200">
      {/* Navigation */}
      <nav className="border-b border-neutral-gray-600 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M25.5874 13.8708V18.1078C25.5874 19.9851 25.5863 21.3132 25.5024 22.3508C25.4195 23.3724 25.2565 23.9948 25.0057 24.4829C24.5269 25.4338 23.7698 26.2092 22.8361 26.7033C22.3467 26.9571 21.7431 27.1179 20.7191 27.2025C19.6785 27.2885 18.3474 27.2896 16.4659 27.2896H12.2271C10.3456 27.2896 9.01447 27.2885 7.97382 27.2025C6.94978 27.1179 6.34619 26.9571 5.85675 26.7033C4.92307 26.2092 4.16599 25.4338 3.68714 24.4829C3.43636 23.9948 3.27336 23.3724 3.19051 22.3508C3.10658 21.3132 3.10561 19.9851 3.10561 18.1078V14.1986C3.10561 12.3213 3.10658 10.9934 3.19051 9.9558C3.27336 8.93415 3.43636 8.31179 3.68714 7.82368C4.16599 6.87286 4.92307 6.09741 5.85675 5.60332C6.34619 5.34953 6.94978 5.18871 7.97382 5.10408C9.01446 5.01794 10.3456 5.01708 12.2271 5.01708H16.4745C16.5122 4.09964 16.696 3.21987 17.0025 2.4H12.1688C10.3585 2.39997 8.91844 2.39997 7.75712 2.49618C6.56773 2.59469 5.55379 2.8009 4.62756 3.28088C3.19509 4.02319 2.02715 5.18864 1.28305 6.61738C0.801911 7.5413 0.595203 8.55275 0.496436 9.73936C0.400001 10.8978 0.4 12.3344 0.4 14.1404V18.1661C0.4 19.972 0.400001 21.4087 0.496436 22.5673C0.595203 23.7538 0.801911 24.7652 1.28305 25.6893C2.02715 27.1181 3.19509 28.2833 4.62756 29.0258C5.55379 29.5057 6.56773 29.7118 7.75712 29.8105C9.91844 29.9067 10.3584 29.9067 12.1687 29.9067H16.2042C18.0145 29.9067 19.4546 29.9067 20.616 29.8105C21.8054 29.7118 22.8193 29.5057 23.7455 29.0258C25.1777 28.2833 26.3457 27.1181 27.0901 25.6893C27.5711 24.7652 27.7777 23.7538 27.8767 22.5673C27.9731 21.4087 27.9731 19.972 27.9731 18.1664V13.3439C27.151 13.6498 26.2693 13.8329 25.3474 13.8708V13.8708Z" fill="white"/>
                <circle cx="25.5" cy="6.5" r="6.5" fill="#7214FF"/>
              </svg>
              <span className="font-satoshi text-xl font-bold text-white">Product</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-white transition-colors hover:text-neutral-gray-300">Home</a>
            <a href="#" className="text-neutral-gray-300 transition-colors hover:text-white">About</a>
            <a href="#" className="text-neutral-gray-300 transition-colors hover:text-white">Features</a>
            <a href="#" className="text-neutral-gray-300 transition-colors hover:text-white">Pricing</a>
            <a href="#" className="text-neutral-gray-300 transition-colors hover:text-white">Blog</a>
          </div>

          {/* CTA Button */}
          <button className="rounded-full bg-primary-blue-violet px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-primary-blue-violet/90">
            Get a demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-16 lg:py-24">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-blue-violet/20 to-secondary-summer-sky/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="font-satoshi text-5xl font-bold leading-tight gradient-text lg:text-6xl xl:text-7xl">
              A CRM dashboard for engineering teams
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-neutral-gray-300 lg:text-xl">
              Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-full bg-primary-blue-violet px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-primary-blue-violet/90">
                Get a demo
              </button>
              <button className="rounded-full border border-neutral-gray-500 bg-gradient-to-r from-neutral-gray-600/20 via-neutral-gray-600/5 to-neutral-gray-600/20 px-6 py-3 font-satoshi text-sm font-medium text-neutral-white-200 transition-colors hover:bg-neutral-gray-500/20">
                View pricing
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <div className="relative mx-auto max-w-4xl">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/960ec47c794871b53bf6fa62f2fa1e8c2225fd59?width=1616" 
                alt="CRM Dashboard Preview" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-24">
            <div className="flex-1">
              <h2 className="font-satoshi text-4xl font-bold gradient-text lg:text-5xl xl:text-6xl">
                Powerful features to help you manage all your leads
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-neutral-gray-300">
                Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            {[
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/50b2f48247adf367436e6a8d116510229ad91066?width=106",
                title: "User information",
                description: "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/a51bac0fb6ee4970258768c1bcb794dc791031e3?width=96",
                title: "Deal tracking", 
                description: "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/779a9fbe4c78ebfe31aec48708aaa6cc8633047e?width=90",
                title: "Pipeline management",
                description: "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/2e408eefcdc95812a5ad729a805f39407bc37ab8?width=69",
                title: "Reporting dashboard",
                description: "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/330d1d499889090ffb2e549d711ccd61a23955fb?width=90",
                title: "Meeting scheduling",
                description: "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              },
              {
                icon: "https://api.builder.io/api/v1/image/assets/TEMP/8c6f4fd99dab4ab4226f487c8709681f69d0ff85?width=95",
                title: "Email tracking",
                description: "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
            ].map((feature, index) => (
              <div key={index} className="rounded border border-neutral-gray-500 bg-neutral-gray-800 p-6 lg:p-8">
                <img src={feature.icon} alt={feature.title} className="mb-6 h-12 w-auto" />
                <div className="space-y-3">
                  <h3 className="font-satoshi text-xl font-bold text-neutral-white-200">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Apps Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-satoshi text-4xl font-bold gradient-text lg:text-5xl xl:text-6xl">
              Essential apps that protect your
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-secondary-medium-orchid" viewBox="0 0 43 30" fill="currentColor">
                  <path d="M2.2926 0.358316C2.82594 0.133316 3.3926 -0.00835088 3.9676 -1.75464e-05C15.6343 -1.75464e-05 27.3009 -1.75464e-05 38.9676 -1.75464e-05C39.5426 -0.00835088 40.1176 0.133316 40.6426 0.366649C37.8009 3.23332 34.9176 6.06665 32.0593 8.92498C29.6343 11.3333 27.2093 13.75 24.7926 16.1583C24.4926 16.4416 24.2176 16.7583 23.8926 17.0166C22.9343 17.8666 21.5176 18.1416 20.3009 17.7333C19.6926 17.55 19.1676 17.175 18.7176 16.7416C13.3593 11.4083 8.00094 6.07498 2.63427 0.741649C2.5176 0.616649 2.3926 0.499982 2.2926 0.358316Z"/>
                </svg>
                <span className="font-satoshi text-3xl font-bold gradient-text lg:text-4xl">Email,</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-secondary-summer-sky" viewBox="0 0 33 30" fill="currentColor">
                  <path d="M10.4301 5.41219C11.0691 5.42722 11.6479 4.85594 11.6328 4.217C11.6328 3.18718 11.6404 2.14985 11.6328 1.12003C11.6028 0.435993 10.9037 -0.120259 10.2272 0.0150455C9.67093 0.0977316 9.21992 0.623915 9.23495 1.1952C9.23495 2.20247 9.23495 3.20973 9.23495 4.20948C9.2124 4.85594 9.7912 5.42722 10.4301 5.41219Z"/>
                </svg>
                <span className="font-satoshi text-3xl font-bold gradient-text lg:text-4xl">Events,</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-secondary-spicy-pink" viewBox="0 0 39 30" fill="currentColor">
                  <path d="M5.83585 0.303783C6.36931 0.0444596 6.97687 -0.00740501 7.5622 4.22692e-06C11.0668 4.22692e-06 14.5788 4.22692e-06 18.0833 4.22692e-06C18.2908 -0.0148142 18.4908 0.0666874 18.6168 0.2371C19.5059 1.28921 20.3876 2.34873 21.2767 3.40084C25.5963 3.40084 29.9085 3.40084 34.2281 3.40084C34.6726 3.40084 35.1172 3.38603 35.5543 3.46753C36.1989 3.60089 36.7916 3.94172 37.2288 4.43814C37.7252 4.97901 37.9771 5.70512 38.0068 6.43863V23.065C37.9697 23.6429 37.7993 24.2134 37.4659 24.6876C36.9843 25.4137 36.1767 25.8879 35.3246 26.0064C35.3246 20.983 35.3246 15.9521 35.3246 10.9286C35.332 10.3285 35.3172 9.72092 35.1246 9.15041C34.6948 7.70561 33.4649 6.54236 32.0053 6.18672C31.3755 6.0163 30.7235 6.05335 30.0789 6.05335C26.0112 6.05335 21.9361 6.05335 17.8685 6.05335C17.209 5.26797 16.5496 4.49 15.8976 3.70462C15.6531 3.40825 15.4086 3.08966 15.0678 2.89702C14.7492 2.70438 14.3713 2.65251 14.0008 2.65251C10.7037 2.65251 7.40661 2.65251 4.1095 2.65251C4.25768 1.65226 4.90969 0.733519 5.83585 0.303783Z"/>
                </svg>
                <span className="font-satoshi text-3xl font-bold gradient-text lg:text-4xl">Files,</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-8 w-8 text-success-green" viewBox="0 0 23 30" fill="currentColor">
                  <path d="M2.55127 0H14.0767C14.0767 2.05078 14.0767 4.10742 14.0767 6.1582C14.0708 6.93164 14.4341 7.69336 15.0376 8.18555C15.5181 8.58984 16.145 8.80078 16.772 8.79492C18.8052 8.79492 20.8325 8.79492 22.8657 8.79492C22.8657 14.9883 22.8657 21.1816 22.8657 27.3691C22.8716 28.2715 22.3735 29.1562 21.6001 29.6191C21.2485 29.8418 20.8442 29.9531 20.4341 30.0059H2.42236C1.96533 29.9355 1.51416 29.8008 1.13916 29.5254C0.441892 29.0391 0.00829839 28.207 0.0141578 27.3633C0.0141578 19.1602 0.0141578 10.957 0.0141578 2.75391C0.0141578 2.4375 0.0434546 2.12109 0.143064 1.82227C0.46533 0.791016 1.47314 0.0351562 2.55127 0Z"/>
                </svg>
                <span className="font-satoshi text-3xl font-bold gradient-text lg:text-4xl">Documents</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-12">
            {/* Encrypted Messages Card */}
            <div className="relative overflow-hidden rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8 lg:p-16">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6">
                  <h3 className="font-satoshi text-2xl font-bold text-neutral-white-200 lg:text-3xl">
                    End-to-end encrypted inbox and messages
                  </h3>
                  <p className="text-neutral-gray-300">
                    Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.
                  </p>
                  <button className="rounded-full border border-neutral-gray-500 bg-gradient-to-r from-neutral-gray-600/20 via-neutral-gray-600/5 to-neutral-gray-600/20 px-6 py-3 font-satoshi text-sm font-medium text-neutral-white-200 transition-colors hover:bg-neutral-gray-500/20">
                    Learn More
                  </button>
                </div>
                <div className="relative">
                  <div className="rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-4">
                    {/* Mock email interface */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-satoshi text-lg font-bold text-neutral-white-200">
                          Invitation to present at Bsides
                        </h4>
                        <div className="flex gap-2">
                          <button className="rounded border border-neutral-gray-500 bg-neutral-gray-600 p-1">
                            <svg className="h-4 w-4 text-neutral-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3 rounded border border-neutral-gray-500 bg-neutral-gray-600 p-3">
                        <div className="flex items-center gap-2">
                          <img src="https://api.builder.io/api/v1/image/assets/TEMP/d41f9140c8d9b067161182d99bacf05b99a106fe?width=60" alt="Profile" className="h-8 w-8 rounded-full" />
                          <div>
                            <div className="text-sm font-medium text-neutral-white-200">R. Baynham</div>
                            <div className="text-xs text-neutral-gray-300">tranthuy.nute@gmail.com</div>
                          </div>
                          <div className="ml-auto text-xs text-neutral-gray-300">Feb 8, 2023</div>
                        </div>
                        <p className="text-sm text-neutral-gray-300">
                          Lorem ipsum dolor sit amet consectetur. Non eget facilisis justo euismod ante mauris orci cursus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary-blue-violet/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-secondary-summer-sky/20 blur-3xl"></div>
            </div>

            {/* Split Cards */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Mobile Apps Card */}
              <div className="relative overflow-hidden rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8">
                <div className="relative z-10 text-center">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/1251d840b982d50a252f883249d39b637a20c5b9?width=542" 
                    alt="Mobile Apps" 
                    className="mx-auto mb-6 h-48 w-auto"
                  />
                  <div className="space-y-3">
                    <h3 className="font-satoshi text-2xl font-bold text-neutral-white-200">
                      Mobile applications
                    </h3>
                    <p className="text-neutral-gray-300">
                      Prem ipsum dolor sit amet consectetur. Viverra sed dignissim risus aliquet condimentum. Vulputate varius feugiat egestas congue
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary-blue-violet/20 blur-3xl"></div>
              </div>

              {/* File Management Card */}
              <div className="relative overflow-hidden rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-satoshi text-2xl font-bold text-neutral-white-200">
                      Upload, share, and preview any file
                    </h3>
                    <p className="text-neutral-gray-300">
                      Tellus et adipiscing sit sit mauris pharetra bibendum. Ligula massa netus nulla ultricies purus.
                    </p>
                  </div>
                  
                  {/* File list mockup */}
                  <div className="rounded border border-neutral-gray-500 bg-neutral-gray-600 p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-neutral-gray-300">
                        <span>Name</span>
                        <span>Type</span>
                        <span>Size</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Q1 overview", type: "Files", size: "10.5 GB", icon: "📁" },
                          { name: "Team review", type: "Docx", size: "5.5 GB", icon: "📄" },
                          { name: "Fetch table.py", type: "Code", size: "7.5 GB", icon: "🎫" },
                          { name: "Cap table.xls", type: "XLS", size: "2.5 GB", icon: "📊" }
                        ].map((file, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <span>{file.icon}</span>
                              <span className="text-neutral-gray-300">{file.name}</span>
                            </div>
                            <span className="text-neutral-gray-300">{file.type}</span>
                            <span className="text-neutral-gray-300">{file.size}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-secondary-neon-blue/20 blur-3xl"></div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full bg-primary-blue-violet px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-primary-blue-violet/90">
              Get Started
            </button>
            <button className="rounded-full border border-neutral-gray-500 bg-gradient-to-r from-neutral-gray-600/20 via-neutral-gray-600/5 to-neutral-gray-600/20 px-6 py-3 font-satoshi text-sm font-medium text-neutral-white-200 transition-colors hover:bg-neutral-gray-500/20">
              Browse all features
            </button>
          </div>
        </div>
      </section>

      {/* Transparent & Open Source Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8 lg:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h2 className="font-satoshi text-3xl font-bold gradient-text lg:text-4xl">
                  Transparent, audited, & open source
                </h2>
                <p className="text-neutral-gray-300">
                  Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque eget quis. Eu amet amet eu interdum.
                </p>
                <button className="rounded-full border border-neutral-gray-500 bg-gradient-to-r from-neutral-gray-600/20 via-neutral-gray-600/5 to-neutral-gray-600/20 px-6 py-3 font-satoshi text-sm font-medium text-neutral-white-200 transition-colors hover:bg-neutral-gray-500/20">
                  Browse all features
                </button>
              </div>
              
              {/* Code preview */}
              <div className="relative">
                <div className="space-y-4">
                  <div className="rounded-lg bg-neutral-black-1000 p-4">
                    <pre className="text-sm text-green-400">
{`// recoverySigningPublicKey is the public key component
// of the keypair used to sign SSS shards. Upon share
// re-combination, spliterati verifies attached signatures
// of each shard to confirm that the shard is correct.`}
                    </pre>
                  </div>
                  <div className="rounded-lg bg-neutral-black-1000 p-4">
                    <pre className="text-sm">
                      <span className="text-blue-400">const</span> <span className="text-cyan-300">salt = srp.generateSalt();</span>{'\n'}
                      <span className="text-blue-400">const</span> <span className="text-cyan-300">masterSecret = await createKeyFromSecret(password, salt);</span>{'\n'}
                      <span className="text-blue-400">const</span> <span className="text-cyan-300">verifierPrivateKey = await createSRPKey(password, salt);</span>{'\n'}
                      <span className="text-blue-400">const</span> <span className="text-cyan-300">verifier = srp.deriveVerifier(verifierPrivateKey);</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary-blue-violet/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-secondary-summer-sky/20 blur-3xl"></div>
          </div>

          {/* Product Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* Product Mail */}
            <div className="rounded-lg border border-neutral-gray-500 bg-neutral-black-1000 p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-satoshi text-xl font-bold text-neutral-white-200">
                    Product Mail
                  </h3>
                  <p className="text-neutral-gray-300">
                    Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                  </p>
                </div>
                
                {/* Email compose interface mockup */}
                <div className="rounded border border-neutral-gray-500 bg-neutral-gray-800 p-4">
                  <div className="space-y-3">
                    <h4 className="text-neutral-white-200">New Message</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-neutral-gray-300">To</span>
                        <span className="rounded-full bg-neutral-gray-500 px-2 py-1 text-xs text-neutral-white-200">Sajib H.</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-neutral-gray-300">Subject</span>
                        <span className="text-neutral-white-200">Dacilisis tellus tinc</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-neutral-gray-300">From</span>
                        <span className="text-neutral-white-200">acilisis@email.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product UI */}
            <div className="rounded-lg border border-neutral-gray-500 bg-neutral-black-1000 p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-satoshi text-xl font-bold text-neutral-white-200">
                    Product UI
                  </h3>
                  <p className="text-neutral-gray-300">
                    Honsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
                  </p>
                </div>
                
                {/* UI components mockup */}
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-4 rounded bg-secondary-medium-orchid/40"></div>
                    <div className="h-4 rounded bg-primary-blue-violet/40"></div>
                    <div className="h-4 rounded bg-secondary-summer-sky/40"></div>
                    <div className="h-4 rounded bg-neutral-gray-500"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 rounded border border-neutral-gray-500 bg-neutral-gray-800 p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-neutral-gray-500"></div>
                        <div className="h-3 flex-1 rounded bg-secondary-neon-blue/40"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-neutral-gray-500"></div>
                        <div className="h-3 flex-1 rounded bg-secondary-summer-sky/40"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-neutral-gray-500"></div>
                        <div className="h-3 flex-1 rounded bg-secondary-medium-orchid/40"></div>
                      </div>
                    </div>
                    <div className="space-y-2 rounded border border-neutral-gray-500 bg-neutral-gray-800 p-3">
                      <div className="h-3 rounded bg-neutral-gray-500"></div>
                      <div className="h-3 rounded bg-neutral-gray-500"></div>
                      <div className="h-3 w-3/4 rounded bg-neutral-gray-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-16 space-y-6">
            <h2 className="font-satoshi text-4xl font-bold gradient-text lg:text-5xl">
              What our clients say
            </h2>
            <p className="mx-auto max-w-2xl text-neutral-gray-300">
              Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis urna sapien.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Cameron Williamson",
                role: "Web Designer",
                avatar: "https://api.builder.io/api/v1/image/assets/TEMP/3ba72ddae8fe1f9e823095d93ee472afca8ac924?width=80",
                content: "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus."
              },
              {
                name: "Esther Howard",
                role: "Web Developer", 
                avatar: "https://api.builder.io/api/v1/image/assets/TEMP/2ccb56304b4866c4162e9000da98ba1e5be36f89?width=80",
                content: "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus"
              },
              {
                name: "Jenny Wilson",
                role: "UI/UX Designer",
                avatar: "https://api.builder.io/api/v1/image/assets/TEMP/61c5003e301b85a34d79966b38789664f9495357?width=80",
                content: "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec."
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative">
                {/* Background decorative shape */}
                <div className="absolute -inset-4 rounded-lg border border-neutral-gray-500 opacity-20"></div>
                
                <div className="relative rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-lg"
                    />
                    <div className="text-left">
                      <div className="font-medium text-neutral-white-200">{testimonial.name}</div>
                      <div className="text-xs text-neutral-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-left text-neutral-white-200">{testimonial.content}</p>
                  
                  {/* Quote icon */}
                  <div className="absolute -top-2 right-4">
                    <svg className="h-8 w-8 text-neutral-black-1000" viewBox="0 0 58 41" fill="currentColor">
                      <path d="M25.5283 15.6342C25.5283 6.06226 20.0382 0 12.449 0C5.34419 0 0.5 4.94553 0.5 11.965C0.5 18.9844 5.18272 22.9728 10.9958 22.9728C12.772 22.9728 14.2252 22.6537 15.517 22.1751C15.517 27.7588 10.5113 32.0661 3.56799 33.3424V41C16.4858 39.4047 25.5283 29.035 25.5283 15.6342ZM57.5 15.6342C57.5 6.06226 52.0099 0 44.4207 0C37.3159 0 32.4717 4.94553 32.4717 11.965C32.4717 18.9844 36.9929 22.9728 42.806 22.9728C44.5822 22.9728 46.0354 22.6537 47.3272 22.1751C47.3272 27.7588 42.483 32.0661 35.5397 33.3424V41C48.4575 39.4047 57.5 29.035 57.5 15.6342Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="mt-16 flex justify-center gap-4">
            <button className="rounded border border-neutral-gray-500 bg-neutral-gray-800 p-2 text-neutral-gray-500 transition-colors hover:text-neutral-gray-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="rounded border border-neutral-gray-500 bg-neutral-gray-800 p-2 text-neutral-gray-300 transition-colors hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8 text-center lg:p-16">
            <div className="relative z-10 space-y-8">
              {/* Discord Logo */}
              <div className="mx-auto w-16">
                <svg viewBox="0 0 66 50" fill="none" className="h-12 w-auto">
                  <path d="M55.6946 4.1701C51.4066 2.19641 46.8702 0.794019 42.2054 0C41.6244 1.03342 40.9455 2.42337 40.4773 3.52915C35.4478 2.78518 30.4645 2.78518 25.5275 3.52915C25.0596 2.42362 24.3654 1.03342 23.7789 0C19.1096 0.794385 14.5693 2.20035 10.2793 4.1804C1.74255 16.8711 -0.571712 29.2462 0.58529 41.4462C6.24744 45.6058 11.7346 48.1327 17.1294 49.7862C18.4701 47.9724 19.6553 46.0521 20.6727 44.0452C18.7357 43.3198 16.8684 42.4258 15.093 41.3739C15.5602 41.0332 16.0164 40.6782 16.461 40.3093C27.2193 45.2595 38.9088 45.2595 49.539 40.3093C49.9854 40.6757 50.4415 41.0307 50.9067 41.3739C49.1284 42.4286 47.2576 43.3244 45.3168 44.0505C46.34 46.0656 47.523 47.9877 48.8601 49.7912C54.2599 48.1379 59.7522 45.6111 65.4144 41.4462C66.7721 27.3035 63.0953 15.042 55.6946 4.1701Z" fill="#5865F2"/>
                </svg>
              </div>

              <div className="space-y-4">
                <h2 className="font-satoshi text-3xl font-bold text-neutral-white-200 lg:text-4xl">
                  Join the community
                </h2>
                <p className="mx-auto max-w-lg text-neutral-gray-300">
                  Join our 400,000+ person community and contribute to a more private and decentralized internet. Start for free.
                </p>
              </div>

              <button className="flex items-center gap-2 rounded-full bg-[#5865F2] px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-[#5865F2]/90">
                Join Discord
              </button>
            </div>

            {/* Background decorations */}
            <div className="absolute -bottom-20 left-1/4 h-32 w-32 rounded-full bg-[#5865F2]/20 blur-3xl"></div>
            <div className="absolute -top-20 left-1/4 h-32 w-32 rounded-full bg-secondary-summer-sky/20 blur-3xl"></div>
            <div className="absolute -top-20 right-1/4 h-32 w-32 rounded-full bg-primary-blue-violet/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Product in the News Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="font-satoshi text-4xl font-bold gradient-text lg:text-5xl">
              Product in the news
            </h2>
            <button className="rounded-full bg-primary-blue-violet px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-primary-blue-violet/90">
              Browse all news
            </button>
          </div>

          {/* News Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Product Mail is taking on Gmail by betting on privacy",
                excerpt: "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
                date: "February 8, 2023",
                decorativeElements: (
                  <div className="space-y-4">
                    <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-success-green flex items-center justify-center">
                      <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.9185 14.32C17.6595 14.571 17.5405 14.934 17.5995 15.29L18.4885 20.21C18.5635 20.627 18.3875 21.049 18.0385 21.29C17.6965 21.54 17.2415 21.57 16.8685 21.37L12.4395 19.06C12.2855 18.978 12.1145 18.934 11.9395 18.929H11.6685C11.5745 18.943 11.4825 18.973 11.3985 19.019L6.96851 21.34C6.74951 21.45 6.50151 21.489 6.25851 21.45C5.66651 21.338 5.27151 20.774 5.36851 20.179L6.25851 15.259C6.31751 14.9 6.19851 14.535 5.93951 14.28L2.32851 10.78C2.02651 10.487 1.92151 10.047 2.05951 9.65C2.19351 9.254 2.53551 8.965 2.94851 8.9L7.91851 8.179C8.29651 8.14 8.62851 7.91 8.79851 7.57L10.9885 3.08C11.0405 2.98 11.1075 2.888 11.1885 2.81L11.2785 2.74C11.3255 2.688 11.3795 2.645 11.4395 2.61L11.5485 2.57L11.7185 2.5H12.1395C12.5155 2.539 12.8465 2.764 13.0195 3.1L15.2385 7.57C15.3985 7.897 15.7095 8.124 16.0685 8.179L21.0385 8.9C21.4585 8.96 21.8095 9.25 21.9485 9.65C22.0795 10.051 21.9665 10.491 21.6585 10.78L17.9185 14.32Z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 rounded border border-neutral-gray-500 bg-neutral-gray-800 p-2 rotate-6">
                      <div className="text-xs text-neutral-gray-300">2,100</div>
                      <div className="flex gap-1">
                        {[1,2,3,4].map(i => <div key={i} className={`h-4 w-2 rounded bg-primary-blue-violet ${i === 4 ? 'h-6' : i === 3 ? 'h-5' : ''}`}></div>)}
                      </div>
                    </div>
                  </div>
                )
              },
              {
                title: "Wants You To Sign Out Of Google Workspace Forever", 
                excerpt: "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
                date: "February 8, 2023",
                decorativeElements: (
                  <div className="space-y-4">
                    <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-warning-yellow flex items-center justify-center">
                      <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.9185 14.32C17.6595 14.571 17.5405 14.934 17.5995 15.29L18.4885 20.21C18.5635 20.627 18.3875 21.049 18.0385 21.29C17.6965 21.54 17.2415 21.57 16.8685 21.37L12.4395 19.06C12.2855 18.978 12.1145 18.934 11.9395 18.929H11.6685C11.5745 18.943 11.4825 18.973 11.3985 19.019L6.96851 21.34C6.74951 21.45 6.50151 21.489 6.25851 21.45C5.66651 21.338 5.27151 20.774 5.36851 20.179L6.25851 15.259C6.31751 14.9 6.19851 14.535 5.93951 14.28L2.32851 10.78C2.02651 10.487 1.92151 10.047 2.05951 9.65C2.19351 9.254 2.53551 8.965 2.94851 8.9L7.91851 8.179C8.29651 8.14 8.62851 7.91 8.79851 7.57L10.9885 3.08C11.0405 2.98 11.1075 2.888 11.1885 2.81L11.2785 2.74C11.3255 2.688 11.3795 2.645 11.4395 2.61L11.5485 2.57L11.7185 2.5H12.1395C12.5155 2.539 12.8465 2.764 13.0195 3.1L15.2385 7.57C15.3985 7.897 15.7095 8.124 16.0685 8.179L21.0385 8.9C21.4585 8.96 21.8095 9.25 21.9485 9.65C22.0795 10.051 21.9665 10.491 21.6585 10.78L17.9185 14.32Z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 rounded border border-neutral-gray-500 bg-neutral-gray-800 p-2 rotate-12">
                      <div className="mb-2 flex gap-1">
                        <div className="h-2 w-2 rounded bg-secondary-summer-sky"></div>
                        <div className="h-2 w-2 rounded bg-primary-blue-violet"></div>
                        <div className="h-2 w-2 rounded bg-success-green"></div>
                      </div>
                      <div className="text-lg font-bold text-neutral-gray-300">134</div>
                      <div className="text-xs text-neutral-gray-300">Project</div>
                    </div>
                  </div>
                )
              },
              {
                title: "The Best Email Encryption Services for 2023",
                excerpt: "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
                date: "February 8, 2023", 
                decorativeElements: (
                  <div className="space-y-4">
                    <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-secondary-neon-blue flex items-center justify-center">
                      <svg className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.9185 14.32C17.6595 14.571 17.5405 14.934 17.5995 15.29L18.4885 20.21C18.5635 20.627 18.3875 21.049 18.0385 21.29C17.6965 21.54 17.2415 21.57 16.8685 21.37L12.4395 19.06C12.2855 18.978 12.1145 18.934 11.9395 18.929H11.6685C11.5745 18.943 11.4825 18.973 11.3985 19.019L6.96851 21.34C6.74951 21.45 6.50151 21.489 6.25851 21.45C5.66651 21.338 5.27151 20.774 5.36851 20.179L6.25851 15.259C6.31751 14.9 6.19851 14.535 5.93951 14.28L2.32851 10.78C2.02651 10.487 1.92151 10.047 2.05951 9.65C2.19351 9.254 2.53551 8.965 2.94851 8.9L7.91851 8.179C8.29651 8.14 8.62851 7.91 8.79851 7.57L10.9885 3.08C11.0405 2.98 11.1075 2.888 11.1885 2.81L11.2785 2.74C11.3255 2.688 11.3795 2.645 11.4395 2.61L11.5485 2.57L11.7185 2.5H12.1395C12.5155 2.539 12.8465 2.764 13.0195 3.1L15.2385 7.57C15.3985 7.897 15.7095 8.124 16.0685 8.179L21.0385 8.9C21.4585 8.96 21.8095 9.25 21.9485 9.65C22.0795 10.051 21.9665 10.491 21.6585 10.78L17.9185 14.32Z"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-4 left-4 rounded border border-neutral-gray-500 bg-neutral-gray-800 p-2 rotate-3">
                      <div className="relative h-16 w-16">
                        <svg className="absolute inset-0" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="18" fill="none" stroke="#32CAFD" strokeWidth="2" strokeDasharray="30 70"/>
                          <circle cx="20" cy="20" r="14" fill="none" stroke="#7214FF" strokeWidth="2" strokeDasharray="20 80"/>  
                          <circle cx="20" cy="20" r="10" fill="none" stroke="#41E88D" strokeWidth="2" strokeDasharray="25 75"/>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-sm font-bold text-neutral-gray-300">264K</div>
                          <div className="text-xs text-neutral-gray-300">Sales</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative mb-6 h-60 overflow-hidden rounded-lg bg-neutral-black-1000">
                  {article.decorativeElements}
                </div>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-satoshi text-xl font-bold text-neutral-white-200 group-hover:text-neutral-gray-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-neutral-gray-300">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="h-px bg-neutral-gray-500"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-gray-300">{article.date}</span>
                    <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                      <span className="font-satoshi text-sm font-medium">Read more</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-black-1000 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand & Newsletter */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M25.5874 13.8708V18.1078C25.5874 19.9851 25.5863 21.3132 25.5024 22.3508C25.4195 23.3724 25.2565 23.9948 25.0057 24.4829C24.5269 25.4338 23.7698 26.2092 22.8361 26.7033C22.3467 26.9571 21.7431 27.1179 20.7191 27.2025C19.6785 27.2885 18.3474 27.2896 16.4659 27.2896H12.2271C10.3456 27.2896 9.01447 27.2885 7.97382 27.2025C6.94978 27.1179 6.34619 26.9571 5.85675 26.7033C4.92307 26.2092 4.16599 25.4338 3.68714 24.4829C3.43636 23.9948 3.27336 23.3724 3.19051 22.3508C3.10658 21.3132 3.10561 19.9851 3.10561 18.1078V14.1986C3.10561 12.3213 3.10658 10.9934 3.19051 9.9558C3.27336 8.93415 3.43636 8.31179 3.68714 7.82368C4.16599 6.87286 4.92307 6.09741 5.85675 5.60332C6.34619 5.34953 6.94978 5.18871 7.97382 5.10408C9.01446 5.01794 10.3456 5.01708 12.2271 5.01708H16.4745C16.5122 4.09964 16.696 3.21987 17.0025 2.4H12.1688C10.3585 2.39997 8.91844 2.39997 7.75712 2.49618C6.56773 2.59469 5.55379 2.8009 4.62756 3.28088C3.19509 4.02319 2.02715 5.18864 1.28305 6.61738C0.801911 7.5413 0.595203 8.55275 0.496436 9.73936C0.400001 10.8978 0.4 12.3344 0.4 14.1404V18.1661C0.4 19.972 0.400001 21.4087 0.496436 22.5673C0.595203 23.7538 0.801911 24.7652 1.28305 25.6893C2.02715 27.1181 3.19509 28.2833 4.62756 29.0258C5.55379 29.5057 6.56773 29.7118 7.75712 29.8105C9.91844 29.9067 10.3584 29.9067 12.1687 29.9067H16.2042C18.0145 29.9067 19.4546 29.9067 20.616 29.8105C21.8054 29.7118 22.8193 29.5057 23.7455 29.0258C25.1777 28.2833 26.3457 27.1181 27.0901 25.6893C27.5711 24.7652 27.7777 23.7538 27.8767 22.5673C27.9731 21.4087 27.9731 19.972 27.9731 18.1664V13.3439C27.151 13.6498 26.2693 13.8329 25.3474 13.8708V13.8708Z" fill="white"/>
                    <circle cx="25.5" cy="6.5" r="6.5" fill="#7214FF"/>
                  </svg>
                  <span className="font-satoshi text-xl font-bold text-white">Product</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-lg border border-neutral-gray-500 bg-neutral-gray-800 p-8">
                <h3 className="mb-4 font-satoshi text-xl font-bold text-neutral-white-200">
                  Subscribe to our newsletter
                </h3>
                <div className="space-y-4">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-neutral-gray-500 bg-neutral-gray-800 px-6 py-3 text-neutral-white-200 placeholder-neutral-gray-400 focus:border-primary-blue-violet focus:outline-none"
                  />
                  <button className="w-full rounded-full bg-primary-blue-violet px-6 py-3 font-satoshi text-sm font-medium text-white transition-colors hover:bg-primary-blue-violet/90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="space-y-6">
              <h4 className="font-satoshi text-lg font-medium text-neutral-gray-300">Pages</h4>
              <div className="space-y-4">
                {['Home', 'About', 'Contact', 'Blog', 'Blog post', 'Pricing', 'Pricing single'].map((link) => (
                  <a key={link} href="#" className="block text-neutral-gray-300 transition-colors hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-satoshi text-lg font-medium text-neutral-gray-300">Utility Pages</h4>
              <div className="space-y-4">
                {['Features', 'Careers', 'Careers single', 'Request a demo', 'Login', 'Sign Up'].map((link) => (
                  <a key={link} href="#" className="block text-neutral-gray-300 transition-colors hover:text-white">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 space-y-8">
            <div className="h-px bg-neutral-gray-500"></div>
            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
              <p className="text-center text-neutral-gray-300 lg:text-left">
                Copyright © Product | Designed by <span className="text-neutral-white-200">Webocean LTD</span> - Powered by <span className="text-neutral-white-200">Webflow</span>
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: 'M14.5 13.35H16.6429L17.5 9.75H14.5V7.95C14.5 7.023 14.5 6.15 16.2143 6.15H17.5V3.126C17.2206 3.0873 16.1654 3 15.0511 3C12.724 3 11.0714 4.4913 11.0714 7.23V9.75H8.5V13.35H11.0714V21H14.5V13.35Z' },
                  { name: 'Twitter', icon: 'M21.5 6.76471C20.8375 7.07353 20.1233 7.27647 19.3834 7.37353C20.1405 6.90588 20.7256 6.16471 21.001 5.27353C20.2868 5.71471 19.4952 6.02353 18.6606 6.2C17.9809 5.44118 17.0258 5 15.9417 5C13.9197 5 12.2677 6.69412 12.2677 8.78529C12.2677 9.08529 12.3021 9.37647 12.3623 9.65C9.29924 9.49118 6.5717 7.98235 4.75621 5.69706C4.43786 6.25294 4.25717 6.90588 4.25717 7.59412C4.25717 8.90882 4.90249 10.0735 5.90057 10.7353C5.28967 10.7353 4.7218 10.5588 4.22275 10.2941V10.3206C4.22275 12.1559 5.49618 13.6912 7.1826 14.0353C6.64116 14.1872 6.07274 14.2084 5.52199 14.0971C5.75568 14.8492 6.21337 15.5074 6.8307 15.9791C7.44804 16.4507 8.19398 16.7121 8.96367 16.7265C7.65896 17.7857 6.04168 18.3582 4.37763 18.35C4.08509 18.35 3.79254 18.3324 3.5 18.2971C5.1348 19.3735 7.07935 20 9.16157 20C15.9417 20 19.6673 14.2294 19.6673 9.22647C19.6673 9.05882 19.6673 8.9 19.6587 8.73235C20.3815 8.20294 21.001 7.53235 21.5 6.76471Z' },
                  { name: 'LinkedIn', icon: 'M8.06768 5.77857C8.06745 6.25004 7.87928 6.7021 7.54458 7.03532C7.20987 7.36853 6.75605 7.55559 6.28295 7.55536C5.80984 7.55512 5.35621 7.36761 5.02184 7.03406C4.68748 6.70051 4.49976 6.24826 4.5 5.77679C4.50024 5.30532 4.6884 4.85325 5.02311 4.52004C5.35781 4.18683 5.81163 3.99976 6.28473 4C6.75784 4.00024 7.21147 4.18775 7.54584 4.5213C7.8802 4.85484 8.06792 5.3071 8.06768 5.77857ZM8.1212 8.87173H4.55352V20H8.1212V8.87173ZM13.7581 8.87173H10.2083V20H13.7225V14.1603C13.7225 10.9072 17.9769 10.605 17.9769 14.1603V20H21.5V12.9515C21.5 7.46736 15.203 7.6718 13.7225 10.365L13.7581 8.87173Z' },
                  { name: 'Instagram', icon: 'M15.06 12C15.06 12.5063 14.9099 13.0013 14.6286 13.4223C14.3473 13.8432 13.9474 14.1714 13.4797 14.3651C13.0119 14.5589 12.4972 14.6096 12.0006 14.5108C11.504 14.412 11.0478 14.1682 10.6898 13.8102C10.3318 13.4522 10.088 12.996 9.98919 12.4994C9.89041 12.0028 9.94111 11.4881 10.1349 11.0203C10.3286 10.5526 10.6568 10.1527 11.0777 9.87144C11.4987 9.59014 11.9937 9.44 12.5 9.44C13.1783 9.44211 13.8282 9.7125 14.3079 10.1921C14.7875 10.6718 15.0579 11.3217 15.06 12ZM20.5 8.48V15.52C20.5 16.7082 20.028 17.8477 19.1878 18.6878C18.3477 19.528 17.2082 20 16.02 20H8.98C7.79183 20 6.65232 19.528 5.81216 18.6878C4.972 17.8477 4.5 16.7082 4.5 15.52V8.48C4.5 7.29183 4.972 6.15232 5.81216 5.31216C6.65232 4.472 7.79183 4 8.98 4H16.02C17.2082 4 18.3477 4.472 19.1878 5.31216C20.028 6.15232 20.5 7.29183 20.5 8.48ZM16.34 12C16.34 11.2405 16.1148 10.4981 15.6928 9.86661C15.2709 9.23513 14.6712 8.74294 13.9695 8.4523C13.2678 8.16166 12.4957 8.08562 11.7509 8.23378C11.006 8.38195 10.3217 8.74768 9.78471 9.28471C9.24768 9.82174 8.88195 10.506 8.73378 11.2509C8.58562 11.9957 8.66166 12.7678 8.9523 13.4695C9.24294 14.1712 9.73513 14.7709 10.3666 15.1928C10.9981 15.6148 11.7405 15.84 12.5 15.84C13.5184 15.84 14.4952 15.4354 15.2153 14.7153C15.9354 13.9952 16.34 13.0184 16.34 12ZM17.62 7.84C17.62 7.65013 17.5637 7.46452 17.4582 7.30665C17.3527 7.14878 17.2028 7.02574 17.0274 6.95308C16.852 6.88042 16.6589 6.8614 16.4727 6.89845C16.2865 6.93549 16.1154 7.02692 15.9812 7.16118C15.8469 7.29544 15.7555 7.46649 15.7184 7.65271C15.6814 7.83893 15.7004 8.03196 15.7731 8.20738C15.8457 8.38279 15.9688 8.53272 16.1267 8.63821C16.2845 8.7437 16.4701 8.8 16.66 8.8C16.9146 8.8 17.1588 8.69886 17.3388 8.51882C17.5189 8.33879 17.62 8.09461 17.62 7.84Z' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#"
                    className="rounded border border-neutral-gray-500 bg-neutral-black-1000 p-2 text-neutral-gray-300 transition-colors hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 25 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
