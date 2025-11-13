export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      <main className="flex-1 px-6 py-12 relative z-10">
        <article className="max-w-3xl mx-auto prose">
          <div className="mb-8">
            <a href="/" className="text-sm text-muted hover:text-foreground transition-colors">
              ← Back to Home
            </a>
          </div>
          
          <h1>Privacy Policy</h1>
          
          <p><em>Last Updated: November 8, 2025</em></p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to tellmeaboutthattime ("we," "our," or "us"). We respect your privacy and are committed to 
            protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you use our mobile application.
          </p>
          
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and profile information</li>
            <li><strong>User Content:</strong> Stories, prompts, and other content you create or share</li>
            <li><strong>Communications:</strong> Messages you send to us or through the App</li>
          </ul>
          
          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage Data:</strong> Information about how you use the App</li>
            <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
            <li><strong>Log Data:</strong> IP address, browser type, access times, and pages viewed</li>
          </ul>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the App</li>
            <li>Create and manage your account</li>
            <li>Enable storytelling and social features</li>
            <li>Send you updates, notifications, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2>4. How We Share Your Information</h2>
          <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
          
          <h3>4.1 With Other Users</h3>
          <p>
            Content you choose to share within the App (such as stories) will be visible to other users you interact with.
          </p>
          
          <h3>4.2 Service Providers</h3>
          <p>
            We may share information with third-party service providers who perform services on our behalf, such as 
            hosting, data analysis, and customer service.
          </p>
          
          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose information if required by law or in response to valid legal requests.</p>
          
          <h3>4.4 Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as 
            part of that transaction.
          </p>
          
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
            internet is 100% secure.
          </p>
          
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide the App and fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
          
          <h2>7. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Opt-out:</strong> Opt out of certain data collection and marketing communications</li>
          </ul>
          
          <h2>8. Children's Privacy</h2>
          <p>
            Our App is not intended for children under 13 years of age. We do not knowingly collect personal 
            information from children under 13. If you believe we have collected information from a child under 13, 
            please contact us immediately.
          </p>
          
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. 
            These countries may have different data protection laws than your country.
          </p>
          
          <h2>10. Third-Party Links</h2>
          <p>
            The App may contain links to third-party websites or services. We are not responsible for the privacy 
            practices of these third parties. We encourage you to review their privacy policies.
          </p>
          
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:contact@tellmeaboutthattime.com">contact@tellmeaboutthattime.com</a>
          </p>
        </article>
      </main>
      
      <footer className="relative z-10 py-6 px-6 text-center">
        <p className="text-sm text-muted">
          <a 
            href="/terms" 
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
          {" • "}
          <a 
            href="/privacy" 
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          {" • "}
          <a 
            href="mailto:contact@tellmeaboutthattime.com" 
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}

