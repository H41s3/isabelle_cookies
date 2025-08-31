import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about how Isabelle Cookies collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your personal information when you visit our website or bakery.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-text prose-p:text-text prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <div className="mb-8">
              <p className="text-text-muted dark:text-gray-400">
                <strong>Last updated:</strong> January 2024
              </p>
            </div>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Visit our bakery and make purchases</li>
              <li>Contact us by phone or in person</li>
              <li>Follow us on social media</li>
              <li>Sign up for our newsletter (if applicable)</li>
            </ul>

            <p>
              The types of information we may collect include:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Purchase history and preferences</li>
              <li>Feedback and reviews</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide our products and services</li>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders</li>
              <li>Improve our products and customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties, 
              except in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the 
              purposes outlined in this privacy policy, unless a longer retention period is required 
              or permitted by law.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, 
              including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>

            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing 
              experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices of these websites. We encourage you to read their privacy policies.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>

            <h2>International Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in countries other than 
              your own. We ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please 
              contact us:
            </p>
            <ul>
              <li><strong>Phone:</strong> +61 4xx xxx xxx</li>
              <li><strong>Address:</strong> 123 Cookie Lane, Sweet Town, NSW 2000, Australia</li>
              <li><strong>Email:</strong> privacy@isabellecookies.com</li>
            </ul>

            <h2>Complaints</h2>
            <p>
              If you have concerns about our handling of your personal information, you have the 
              right to lodge a complaint with your local data protection authority.
            </p>

            <div className="mt-12 p-6 bg-secondary dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-text dark:text-white mb-3">
                Commitment to Privacy
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                At Isabelle Cookies, we are committed to protecting your privacy and ensuring the 
                security of your personal information. We believe in transparency and will always 
                be clear about how we use your data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
