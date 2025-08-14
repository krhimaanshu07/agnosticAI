import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { siteConfig } from "@/site.config";

export default function About() {
  const values = [
    {
      icon: "fas fa-heart",
      title: "Patient First",
      description: "Every enhancement serves the ultimate goal of better patient outcomes",
    },
    {
      icon: "fas fa-handshake",
      title: "Vendor Neutrality",
      description: "OEM-agnostic solutions that work with any imaging system",
    },
    {
      icon: "fas fa-microscope",
      title: "Scientific Rigor",
      description: "Physics-informed AI that respects clinical requirements",
    },
    {
      icon: "fas fa-users",
      title: "Accessibility",
      description: "Making advanced imaging technology accessible to all providers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - {siteConfig.name}</title>
        <meta name="description" content="Transforming healthcare through AI. Learn about our mission to make advanced imaging technology accessible to all healthcare providers." />
      </Helmet>

      <Section 
        title="Transforming Healthcare Through AI"
        subtitle="Founded on the principle that advanced imaging technology should be accessible to all healthcare providers, regardless of their equipment lifecycle or vendor relationships."
        background="black"
        className="pt-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Mission Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zinc-300 leading-relaxed">
                We believe that every patient deserves access to the highest quality medical imaging, regardless of the 
                age or manufacturer of the imaging equipment. Our OEM-agnostic GenAI platform democratizes advanced 
                imaging capabilities, enabling healthcare providers to upgrade their diagnostic quality through software 
                rather than costly hardware replacements.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">The Problem We Solve</h3>
              <p className="text-zinc-300 leading-relaxed">
                Healthcare systems face immense pressure from rapidly advancing imaging technology. With equipment 
                lifecycles spanning 10-15 years and imaging technology improving dramatically every few years, 
                providers must choose between significant capital investments or accepting suboptimal image quality. 
                Traditional OEM upgrade paths often lead to vendor lock-in and inconsistent quality standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">Our Solution</h3>
              <p className="text-zinc-300 leading-relaxed">
                Our GenAI-powered platform provides immediate image quality upgrades for existing equipment through 
                advanced super-resolution and enhancement algorithms. By supporting all major OEM systems and 
                maintaining vendor neutrality, we enable healthcare providers to optimize their imaging workflows 
                while preserving their existing infrastructure investments.
              </p>
            </div>
          </div>
          
          {/* Values */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-dm-sans font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${value.icon} text-primary`}></i>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{value.title}</div>
                      <div className="text-zinc-300 text-sm">{value.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="studies-enhanced-counter">
                {siteConfig.company.studiesEnhanced.toLocaleString()}+
              </div>
              <div className="text-zinc-300">Studies Enhanced</div>
              <div className="text-zinc-500 text-sm mt-1">
                Across {siteConfig.company.healthcareSystems}+ Healthcare Systems
              </div>
            </div>
          </div>
        </div>
        
        {/* Founding Story */}
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-6 text-center">Founding Story</h3>
          <p className="text-zinc-300 leading-relaxed text-center">
            Founded by a team of radiologists, AI researchers, and healthcare technology veterans who experienced 
            firsthand the frustration of working with aging imaging equipment while knowing that software-based 
            improvements were possible. After seeing countless cases where image quality limitations impacted 
            diagnostic confidence, we set out to create a solution that could upgrade any imaging system through 
            the power of artificial intelligence, without requiring hardware replacement or vendor lock-in.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-zinc-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-zinc-300">Years Research</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">10+</div>
            <div className="text-zinc-300">Patents Pending</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-zinc-300">OEM Agnostic</div>
          </div>
        </div>
      </Section>
    </>
  );
}
