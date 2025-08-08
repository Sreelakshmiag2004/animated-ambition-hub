import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sureshyuvaraj2003@gmail.com",
      href: "mailto:sureshyuvaraj2003@gmail.com",
      color: "cosmic"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9841721640",
      href: "tel:+919841721640",
      color: "stellar"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "nebula"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/YUVARAJ-2K3",
      color: "cosmic"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yuvaraj-s-542053256",
      color: "stellar"
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: "https://portfolioyuva.netlify.app",
      color: "nebula"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, you would send this data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-cosmic">Touch</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 gradient-cosmic mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity. I'm always excited to work on innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm cosmic-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-stellar mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-input/50 border-border focus:border-cosmic transition-colors duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-input/50 border-border focus:border-cosmic transition-colors duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border focus:border-cosmic transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border focus:border-cosmic transition-colors duration-300 min-h-32"
                      placeholder="Tell me about your project or idea..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-cosmic hover:bg-cosmic/80 text-cosmic-foreground glow-cosmic"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm stellar-border hover:cosmic-border transition-all duration-300">
                    <CardContent className="p-6">
                      <a
                        href={info.href}
                        className="flex items-center space-x-4 group"
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        <div className={`p-3 rounded-lg bg-${info.color}/10 group-hover:bg-${info.color}/20 transition-colors duration-300`}>
                          <info.icon className={`h-6 w-6 text-${info.color}`} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground group-hover:text-cosmic transition-colors duration-300">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 backdrop-blur-sm cosmic-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-stellar mb-4">
                    Connect with me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className={`p-3 rounded-lg bg-${social.color}/10 hover:bg-${social.color}/20 transition-all duration-300 group`}
                      >
                        <social.icon className={`h-6 w-6 text-${social.color} group-hover:text-${social.color}/80`} />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/30 backdrop-blur-sm stellar-border">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-nebula mb-2">
                    Ready to collaborate?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I'm always open to discussing new opportunities and innovative projects.
                  </p>
                  <Button
                    variant="outline"
                    className="stellar-border text-stellar hover:bg-stellar hover:text-stellar-foreground"
                    onClick={() => window.open('mailto:sureshyuvaraj2003@gmail.com', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Me Directly
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;