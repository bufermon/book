import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function EULA() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-foreground  mb-8" data-testid="heading-eula-title">
            End User License Agreement
          </h1>

          <div className="prose prose max-w-none space-y-8">
            <div className="professional-card p-8">
              <p className="text-sm text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8" data-testid="section-license-grant">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">License Grant</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Leona Drummond grants you a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Casino Quest Book mobile application strictly in accordance with the terms of this Agreement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This license is granted solely for your personal, non-commercial use. You may not use the application for any commercial purposes without our express written consent.
                </p>
              </section>

              <section className="mb-8" data-testid="section-restrictions">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Restrictions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to, and you will not permit others to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the application</li>
                  <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the application</li>
                  <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Leona Drummond or its affiliates</li>
                  <li>Use the application for any purpose that is unlawful or prohibited by this Agreement</li>
                </ul>
              </section>

              <section className="mb-8" data-testid="section-intellectual-property">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The application, including without limitation all copyrights, patents, trademarks, trade secrets and other intellectual property rights are, and shall remain, the sole and exclusive property of Leona Drummond. This Agreement does not convey to you any interest in or to the application, but only a limited right of use that is revocable in accordance with the terms of this Agreement.
                </p>
              </section>

              <section className="mb-8" data-testid="section-user-generated-content">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">User-Generated Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The application may allow you to create, submit, or display content such as usernames, avatars, or game statistics ("User Content"). You retain all rights in, and are solely responsible for, the User Content you create.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By creating or submitting User Content through the application, you grant Leona Drummond a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such User Content in connection with the operation of the application.
                </p>
              </section>

              <section className="mb-8" data-testid="section-updates">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Updates and Modifications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Leona Drummond may from time to time in its sole discretion develop and provide application updates, which may include upgrades, bug fixes, patches, other error corrections, and/or new features (collectively, including related documentation, "Updates").
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Updates may also modify or delete in their entirety certain features and functionality. You agree that Leona Drummond has no obligation to provide any Updates or to continue to provide or enable any particular features or functionality.
                </p>
              </section>

              <section className="mb-8" data-testid="section-termination">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Term and Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This Agreement shall remain in effect until terminated by you or Leona Drummond. Leona Drummond may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination of this Agreement, you shall cease all use of the application and delete all copies of the application from your device. Termination of this Agreement will not limit any of Leona Drummond's rights or remedies at law or in equity.
                </p>
              </section>

              <section className="mb-8" data-testid="section-disclaimer">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The application is provided to you "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, Leona Drummond expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the application.
                </p>
              </section>

              <section className="mb-8" data-testid="section-limitation">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by applicable law, in no event will Leona Drummond have any liability arising from or related to your use of or inability to use the application for any indirect, incidental, special, consequential, or punitive damages, including lost profits, loss of data, or business interruption.
                </p>
              </section>

              <section className="mb-8" data-testid="section-severability">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                </p>
              </section>

              <section className="mb-8" data-testid="section-amendments">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Amendments to this Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Leona Drummond reserves the right, at its sole discretion, to modify or replace this Agreement at any time. By continuing to access or use the application after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </section>

              <section data-testid="section-contact-info">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Agreement, please contact us:
                </p>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href="mailto:leonadrum2@hotmail.com" className="text-foreground hover:text-muted-foreground transition-colors">
                      leonadrum2@hotmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">Developer:</strong> Leona Drummond
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
