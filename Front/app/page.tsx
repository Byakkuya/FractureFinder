"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bone, Brain, Microscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-mint to-pearl">
      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm">
        <div className="container flex h-16 items-center px-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Bone className="h-6 w-6 text-ocean" />
            <span className="text-xl font-bold text-ocean">FractureFinder</span>
          </div>
          <div className="ml-auto">
            <Link href="/login">
              <Button className="bg-emerald hover:bg-ocean transition-colors">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-ocean">
                AI-Powered Bone Fracture Detection
              </h1>
              <p className="text-xl text-emerald max-w-[600px] mx-auto lg:mx-0">
                Enhance your diagnostic accuracy with advanced AI technology designed specifically for radiologists.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link href="/login">
                  <Button size="lg" className="bg-ocean hover:bg-emerald transition-colors text-white px-8 py-6 text-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-sky rounded-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-[#1E293B]/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* X-ray Image with Analysis Overlay */}
                      <div className="relative w-full h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80"
                          alt="X-ray analysis with AI detection"
                          fill
                          className="object-cover rounded-lg"
                        />
                        {/* AI Analysis Overlay */}
                        <div className="absolute inset-0 bg-ocean/10">
                          {/* Detection Box */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-emerald rounded-lg animate-pulse">
                            <div className="absolute -top-8 left-0 bg-emerald text-white text-xs px-2 py-1 rounded">
                              Analyzing...
                            </div>
                          </div>
                          {/* Measurement Lines */}
                          <div className="absolute top-1/4 left-4 right-4 flex justify-between items-center">
                            <div className="h-px w-full bg-ocean/50 border-dashed"></div>
                            <span className="text-xs text-white bg-ocean/75 px-1 rounded ml-2">32mm</span>
                          </div>
                          {/* Analysis Points */}
                          <div className="absolute bottom-4 right-4 space-y-2">
                            <div className="flex items-center space-x-2 text-xs text-white bg-ocean/75 px-2 py-1 rounded">
                              <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                              <span>Density: Normal</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-white bg-ocean/75 px-2 py-1 rounded">
                              <div className="w-2 h-2 bg-emerald rounded-full animate-pulse"></div>
                              <span>Structure: Intact</span>
                            </div>
                          </div>
                        </div>
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald/10 to-transparent animate-scan"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto mt-24">
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="p-4 bg-sky rounded-full">
                <Brain className="h-8 w-8 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-ocean">AI Analysis</h3>
              <p className="text-emerald text-center">
                Advanced machine learning algorithms for accurate fracture detection
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="p-4 bg-sky rounded-full">
                <Microscope className="h-8 w-8 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-ocean">Detailed Reports</h3>
              <p className="text-emerald text-center">
                Comprehensive analysis reports with highlighted areas of concern
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-8 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
              <div className="p-4 bg-sky rounded-full">
                <Bone className="h-8 w-8 text-ocean" />
              </div>
              <h3 className="text-xl font-bold text-ocean">Patient Management</h3>
              <p className="text-emerald text-center">
                Organize and track patient scans with an intuitive folder system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container flex h-16 items-center px-4 mx-auto">
          <p className="text-sm text-emerald">
            © 2024 FractureFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}