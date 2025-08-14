import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/site.config";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    // Mock magic link sending
    setIsSubmitted(true);
    toast({
      title: "Magic Link Sent",
      description: `A magic link has been sent to ${data.email}. Please check your inbox.`,
    });
    
    // In a real implementation, this would call an API to send the magic link
    console.log("Sending magic link to:", data.email);
  };

  return (
    <>
      <Helmet>
        <title>Login - {siteConfig.name}</title>
        <meta name="description" content="Sign in to your Agnostic Imaging AI account to access enhanced medical imaging services." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-black medical-grid pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 rounded-xl">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-medical rounded-lg flex items-center justify-center">
                    <i className="fas fa-atom text-white"></i>
                  </div>
                </div>
                <h1 className="text-2xl font-dm-sans font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-zinc-400">Sign in to your account</p>
              </div>

              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="login-form">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-300">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              placeholder="Enter your email"
                              className="bg-zinc-800 border-zinc-600 text-white focus:border-primary"
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      data-testid="submit-login"
                    >
                      Send Magic Link
                      <i className="fas fa-paper-plane ml-2"></i>
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center space-y-6" data-testid="login-success">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <i className="fas fa-check text-green-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Check Your Email</h3>
                    <p className="text-zinc-300">
                      We've sent a magic link to your email address. Click the link to sign in securely.
                    </p>
                  </div>
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                    variant="outline"
                    className="w-full border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                    data-testid="resend-link"
                  >
                    Send Another Link
                  </Button>
                </div>
              )}

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                <p className="text-zinc-400 text-sm">
                  Don't have an account?{" "}
                  <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
                    Contact Sales
                  </Link>
                </p>
                <p className="text-zinc-500 text-xs mt-2">
                  By signing in, you agree to our{" "}
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-8">
              <Link 
                to="/" 
                className="text-zinc-400 hover:text-primary transition-colors text-sm"
                data-testid="back-to-home"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
