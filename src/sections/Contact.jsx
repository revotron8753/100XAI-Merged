import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Mail, MessageSquare } from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91',   label: 'India +91' },
  { code: '+1',    label: 'USA +1' },
  { code: '+1',    label: 'Canada +1' },
  { code: '+44',   label: 'UK +44' },
  { code: '+61',   label: 'Australia +61' },
  { code: '+64',   label: 'New Zealand +64' },
  { code: '+971',  label: 'UAE +971' },
  { code: '+966',  label: 'Saudi Arabia +966' },
  { code: '+974',  label: 'Qatar +974' },
  { code: '+973',  label: 'Bahrain +973' },
  { code: '+968',  label: 'Oman +968' },
  { code: '+965',  label: 'Kuwait +965' },
  { code: '+962',  label: 'Jordan +962' },
  { code: '+961',  label: 'Lebanon +961' },
  { code: '+972',  label: 'Israel +972' },
  { code: '+90',   label: 'Turkey +90' },
  { code: '+98',   label: 'Iran +98' },
  { code: '+964',  label: 'Iraq +964' },
  { code: '+963',  label: 'Syria +963' },
  { code: '+967',  label: 'Yemen +967' },
  { code: '+65',   label: 'Singapore +65' },
  { code: '+60',   label: 'Malaysia +60' },
  { code: '+62',   label: 'Indonesia +62' },
  { code: '+63',   label: 'Philippines +63' },
  { code: '+66',   label: 'Thailand +66' },
  { code: '+84',   label: 'Vietnam +84' },
  { code: '+95',   label: 'Myanmar +95' },
  { code: '+855',  label: 'Cambodia +855' },
  { code: '+856',  label: 'Laos +856' },
  { code: '+673',  label: 'Brunei +673' },
  { code: '+670',  label: 'Timor-Leste +670' },
  { code: '+92',   label: 'Pakistan +92' },
  { code: '+880',  label: 'Bangladesh +880' },
  { code: '+94',   label: 'Sri Lanka +94' },
  { code: '+977',  label: 'Nepal +977' },
  { code: '+975',  label: 'Bhutan +975' },
  { code: '+960',  label: 'Maldives +960' },
  { code: '+93',   label: 'Afghanistan +93' },
  { code: '+81',   label: 'Japan +81' },
  { code: '+82',   label: 'South Korea +82' },
  { code: '+86',   label: 'China +86' },
  { code: '+852',  label: 'Hong Kong +852' },
  { code: '+853',  label: 'Macau +853' },
  { code: '+886',  label: 'Taiwan +886' },
  { code: '+976',  label: 'Mongolia +976' },
  { code: '+7',    label: 'Russia +7' },
  { code: '+7',    label: 'Kazakhstan +7' },
  { code: '+998',  label: 'Uzbekistan +998' },
  { code: '+996',  label: 'Kyrgyzstan +996' },
  { code: '+993',  label: 'Turkmenistan +993' },
  { code: '+992',  label: 'Tajikistan +992' },
  { code: '+994',  label: 'Azerbaijan +994' },
  { code: '+995',  label: 'Georgia +995' },
  { code: '+374',  label: 'Armenia +374' },
  { code: '+49',   label: 'Germany +49' },
  { code: '+33',   label: 'France +33' },
  { code: '+39',   label: 'Italy +39' },
  { code: '+34',   label: 'Spain +34' },
  { code: '+31',   label: 'Netherlands +31' },
  { code: '+32',   label: 'Belgium +32' },
  { code: '+41',   label: 'Switzerland +41' },
  { code: '+43',   label: 'Austria +43' },
  { code: '+351',  label: 'Portugal +351' },
  { code: '+46',   label: 'Sweden +46' },
  { code: '+47',   label: 'Norway +47' },
  { code: '+45',   label: 'Denmark +45' },
  { code: '+358',  label: 'Finland +358' },
  { code: '+353',  label: 'Ireland +353' },
  { code: '+48',   label: 'Poland +48' },
  { code: '+420',  label: 'Czech Republic +420' },
  { code: '+421',  label: 'Slovakia +421' },
  { code: '+36',   label: 'Hungary +36' },
  { code: '+40',   label: 'Romania +40' },
  { code: '+359',  label: 'Bulgaria +359' },
  { code: '+30',   label: 'Greece +30' },
  { code: '+385',  label: 'Croatia +385' },
  { code: '+381',  label: 'Serbia +381' },
  { code: '+386',  label: 'Slovenia +386' },
  { code: '+387',  label: 'Bosnia +387' },
  { code: '+382',  label: 'Montenegro +382' },
  { code: '+383',  label: 'Kosovo +383' },
  { code: '+389',  label: 'North Macedonia +389' },
  { code: '+355',  label: 'Albania +355' },
  { code: '+370',  label: 'Lithuania +370' },
  { code: '+371',  label: 'Latvia +371' },
  { code: '+372',  label: 'Estonia +372' },
  { code: '+375',  label: 'Belarus +375' },
  { code: '+380',  label: 'Ukraine +380' },
  { code: '+373',  label: 'Moldova +373' },
  { code: '+352',  label: 'Luxembourg +352' },
  { code: '+354',  label: 'Iceland +354' },
  { code: '+356',  label: 'Malta +356' },
  { code: '+357',  label: 'Cyprus +357' },
  { code: '+350',  label: 'Gibraltar +350' },
  { code: '+376',  label: 'Andorra +376' },
  { code: '+378',  label: 'San Marino +378' },
  { code: '+377',  label: 'Monaco +377' },
  { code: '+55',   label: 'Brazil +55' },
  { code: '+52',   label: 'Mexico +52' },
  { code: '+54',   label: 'Argentina +54' },
  { code: '+56',   label: 'Chile +56' },
  { code: '+57',   label: 'Colombia +57' },
  { code: '+51',   label: 'Peru +51' },
  { code: '+58',   label: 'Venezuela +58' },
  { code: '+593',  label: 'Ecuador +593' },
  { code: '+591',  label: 'Bolivia +591' },
  { code: '+595',  label: 'Paraguay +595' },
  { code: '+598',  label: 'Uruguay +598' },
  { code: '+592',  label: 'Guyana +592' },
  { code: '+597',  label: 'Suriname +597' },
  { code: '+503',  label: 'El Salvador +503' },
  { code: '+502',  label: 'Guatemala +502' },
  { code: '+504',  label: 'Honduras +504' },
  { code: '+505',  label: 'Nicaragua +505' },
  { code: '+506',  label: 'Costa Rica +506' },
  { code: '+507',  label: 'Panama +507' },
  { code: '+53',   label: 'Cuba +53' },
  { code: '+1809', label: 'Dominican Rep. +1809' },
  { code: '+1876', label: 'Jamaica +1876' },
  { code: '+1868', label: 'Trinidad +1868' },
  { code: '+27',   label: 'South Africa +27' },
  { code: '+234',  label: 'Nigeria +234' },
  { code: '+254',  label: 'Kenya +254' },
  { code: '+233',  label: 'Ghana +233' },
  { code: '+251',  label: 'Ethiopia +251' },
  { code: '+255',  label: 'Tanzania +255' },
  { code: '+256',  label: 'Uganda +256' },
  { code: '+250',  label: 'Rwanda +250' },
  { code: '+252',  label: 'Somalia +252' },
  { code: '+253',  label: 'Djibouti +253' },
  { code: '+291',  label: 'Eritrea +291' },
  { code: '+249',  label: 'Sudan +249' },
  { code: '+211',  label: 'South Sudan +211' },
  { code: '+20',   label: 'Egypt +20' },
  { code: '+218',  label: 'Libya +218' },
  { code: '+216',  label: 'Tunisia +216' },
  { code: '+213',  label: 'Algeria +213' },
  { code: '+212',  label: 'Morocco +212' },
  { code: '+222',  label: 'Mauritania +222' },
  { code: '+221',  label: 'Senegal +221' },
  { code: '+223',  label: 'Mali +223' },
  { code: '+226',  label: 'Burkina Faso +226' },
  { code: '+227',  label: 'Niger +227' },
  { code: '+228',  label: 'Togo +228' },
  { code: '+229',  label: 'Benin +229' },
  { code: '+225',  label: 'Ivory Coast +225' },
  { code: '+224',  label: 'Guinea +224' },
  { code: '+245',  label: 'Guinea-Bissau +245' },
  { code: '+238',  label: 'Cape Verde +238' },
  { code: '+232',  label: 'Sierra Leone +232' },
  { code: '+231',  label: 'Liberia +231' },
  { code: '+220',  label: 'Gambia +220' },
  { code: '+240',  label: 'Eq. Guinea +240' },
  { code: '+241',  label: 'Gabon +241' },
  { code: '+242',  label: 'Congo +242' },
  { code: '+243',  label: 'DR Congo +243' },
  { code: '+237',  label: 'Cameroon +237' },
  { code: '+236',  label: 'Central African Rep. +236' },
  { code: '+235',  label: 'Chad +235' },
  { code: '+239',  label: 'Sao Tome +239' },
  { code: '+244',  label: 'Angola +244' },
  { code: '+260',  label: 'Zambia +260' },
  { code: '+263',  label: 'Zimbabwe +263' },
  { code: '+265',  label: 'Malawi +265' },
  { code: '+258',  label: 'Mozambique +258' },
  { code: '+261',  label: 'Madagascar +261' },
  { code: '+269',  label: 'Comoros +269' },
  { code: '+266',  label: 'Lesotho +266' },
  { code: '+268',  label: 'Eswatini +268' },
  { code: '+267',  label: 'Botswana +267' },
  { code: '+264',  label: 'Namibia +264' },
  { code: '+679',  label: 'Fiji +679' },
  { code: '+675',  label: 'Papua New Guinea +675' },
  { code: '+677',  label: 'Solomon Islands +677' },
  { code: '+678',  label: 'Vanuatu +678' },
  { code: '+676',  label: 'Tonga +676' },
  { code: '+685',  label: 'Samoa +685' },
  { code: '+686',  label: 'Kiribati +686' },
  { code: '+688',  label: 'Tuvalu +688' },
  { code: '+674',  label: 'Nauru +674' },
  { code: '+680',  label: 'Palau +680' },
  { code: '+691',  label: 'Micronesia +691' },
  { code: '+692',  label: 'Marshall Islands +692' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', countryCode: '+91', phone: '', company: '', need: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await fetch('https://script.google.com/macros/s/AKfycby3c7sJkLmyrowhiqyZ8jIbliDBrY0-1CRIH09PLJbkTJ1FYpA6K4uSId1zFSjck_GRuA/exec', {
        method: 'POST',
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: "'" + form.countryCode + ' ' + form.phone,
          company: form.company,
          need: form.need,
          message: form.message,
        }),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const perks = [
    { icon: Clock, text: 'Reply within 24 hours' },
    { icon: ShieldCheck, text: 'No spam, no pressure' },
    { icon: CheckCircle2, text: 'Free audit, no strings' },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-shell">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-left"
          >
            <div className="section-tag contact-tag">Get Started</div>
            <h2 className="contact-title">
              Let's build your<br />
              <span className="accent">automation engine.</span>
            </h2>
            <p className="contact-desc">
              Tell us a bit about your business. We'll come back within 24 hours
              with a tailored AI agent roadmap — what to deploy, in what order,
              and what it'll unlock.
            </p>

            <ul className="contact-perks">
              {perks.map((p) => (
                <li key={p.text}>
                  <p.icon size={18} strokeWidth={2.5} />
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>

            <div className="contact-meta">
              <a href="mailto:hello@100xai.co" className="meta-item">
                <Mail size={16} />
                <span>hello@100xai.co</span>
              </a>
              <a href="#" className="meta-item">
                <MessageSquare size={16} />
                <span>Book a 15-min intro call</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-right"
          >
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">
                  <CheckCircle2 size={48} strokeWidth={2.2} />
                </div>
                <h3>Request received.</h3>
                <p>
                  Thanks, {form.name.split(' ')[0]}. One of our growth strategists
                  will reach out within 24 hours with your tailored automation roadmap.
                </p>
                <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', countryCode: '+91', phone: '', company: '', need: '', message: '' }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {error && (
                  <p style={{ color: 'red', marginBottom: '1rem' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={update('name')}
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update('email')}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone number <span className="opt">(optional)</span></label>
                  <div className="phone-row">
                    <select
                      className="phone-code"
                      value={form.countryCode}
                      onChange={update('countryCode')}
                      aria-label="Country code"
                    >
                      {COUNTRY_CODES.map((c, i) => (
                        <option key={i} value={c.code}>{c.label.replace(' +', '\u00A0\u00A0\u00A0+')}</option>
                      ))}
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={update('phone')}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="company">Company / brand</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={update('company')}
                  />
                </div>

                <div className="field">
                  <label htmlFor="need">What do you want to automate?</label>
                  <select
                    id="need"
                    required
                    value={form.need}
                    onChange={update('need')}
                  >
                    <option value="" disabled>Select a focus area</option>
                    <option value="cold-email">Cold email outreach</option>
                    <option value="linkedin">LinkedIn outreach</option>
                    <option value="content">SEO content + backlinks</option>
                    <option value="social">Social media + repurposing</option>
                    <option value="inbox">Inbox + customer replies</option>
                    <option value="full-stack">The full growth stack</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Anything else? <span className="opt">(optional)</span></label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="Current team size, biggest bottleneck, what good looks like…"
                    value={form.message}
                    onChange={update('message')}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-submit">
                  Get my free audit <ArrowRight size={18} />
                </button>

                <p className="form-note">
                  <ShieldCheck size={13} />
                  We respect your inbox. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
