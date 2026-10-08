import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '../content/siteData';
import '../styles/basement.css';

const FORM_ID = 'v8yeCev0amqIMAJD1CZW';
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const OFFER_LINE = 'Free Carpet Or $500 Off Your Basement Remodel';

const heroStats = [
  { value: '500+', label: 'Basements' },
  { value: '4.9★', label: 'Rating' },
  { value: '10+', label: 'Years' },
  { value: '100%', label: 'Satisfaction' }
];

const tickerItems = [
  'Basement Remodeling Denver',
  'Basement Finishing Aurora',
  'Basement Contractors Lakewood',
  'Basement Remodel Parker',
  'Basement Finishing Littleton',
  'Basement Remodeling Centennial',
  'Basement Contractors Westminster',
  'Basement Finishing Arvada'
];

const basementServices = [
  {
    title: 'Full Basement Finishing',
    desc: 'Complete basement finishing from unfinished to move-in ready. Framing, insulation, drywall, electrical, plumbing, flooring, and painting — all by our in-house team.',
    icon: '🏠'
  },
  {
    title: 'Entertainment & Media Rooms',
    desc: 'Custom home theaters, game rooms, and wet bars. Soundproofing, custom lighting, built-in cabinetry — the perfect family entertainment space.',
    icon: '🎬'
  },
  {
    title: 'Basement Bathroom Addition',
    desc: 'Expert bathroom remodeling with plumbing rough-in, tiling, vanity installation, and luxury finishes. Full or half-bath options available.',
    icon: '🛁'
  },
  {
    title: 'Bedroom & Guest Suites',
    desc: 'Code-compliant bedroom additions with egress windows, closets, and climate control. Perfect for growing families or rental income.',
    icon: '🛏️'
  },
  {
    title: 'Home Office & Gym',
    desc: 'Dedicated workspace or fitness studio with custom built-ins, optimal lighting, soundproofing, and independent climate control.',
    icon: '💼'
  },
  {
    title: 'Walkout Basement Remodel',
    desc: 'Specialized walkout renovation with patio doors, natural lighting, and seamless indoor-outdoor living. Maximize your lower level.',
    icon: '🚪'
  }
];

const transformStats = [
  { value: '500+', label: 'Projects' },
  { value: '$50K+', label: 'Avg Value Added' },
  { value: '4-8 WK', label: 'Timeline' }
];

const whyChoose = [
  {
    title: 'Licensed, Bonded & Insured',
    desc: 'Full protection on every basement renovation project in Colorado.',
    icon: '🛡️'
  },
  {
    title: 'Custom Design-Build',
    desc: 'Every project is custom-designed to your vision, lifestyle, and budget.',
    icon: '📐'
  },
  {
    title: 'All-in-One Team',
    desc: 'Electrical, plumbing, HVAC, framing, drywall, flooring — one crew, no chaos.',
    icon: '👷'
  },
  {
    title: 'On-Time Completion',
    desc: 'We schedule carefully and deliver on time, every time.',
    icon: '📅'
  },
  {
    title: 'Transparent Pricing',
    desc: 'Detailed line-item estimates with zero hidden fees.',
    icon: '💲'
  }
];

const basementVideos = [
  { id: '1195860882', hash: '2c54cd9aa9' },
  { id: '1195860881', hash: 'b52c6c6f7c' }
];

const processSteps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We visit your home, discuss your vision, and provide a detailed no-obligation estimate.'
  },
  {
    num: '02',
    title: 'Custom Design',
    desc: 'Custom layout, materials, finishes, electrical, and plumbing — tailored to you.'
  },
  {
    num: '03',
    title: 'Expert Build-Out',
    desc: 'Our skilled crew handles every phase under one roof — start to finish.'
  },
  {
    num: '04',
    title: 'Final Walkthrough',
    desc: 'We don’t leave until you’re 100% satisfied with your new basement.'
  }
];

const basementReviews = [
  {
    quote: 'JRC turned our dark, creepy basement into the best room in the house! The entertainment area is incredible — wet bar, theater setup, the works. Our friends are blown away.',
    author: 'Mark R.',
    initials: 'MR',
    place: 'Denver, CO'
  },
  {
    quote: 'We needed a basement bedroom and bathroom for my mother-in-law. JRC handled everything — permits, plumbing, egress window — on time and on budget. Outstanding quality!',
    author: 'Sarah P.',
    initials: 'SP',
    place: 'Aurora, CO'
  },
  {
    quote: 'Best basement contractors in Colorado. Fair pricing, excellent communication, top-tier craftsmanship. They transformed 1,200 sq ft of unfinished space into a modern living area.',
    author: 'Jason K.',
    initials: 'JK',
    place: 'Highlands Ranch, CO'
  }
];

const serviceAreas = [
  'Denver', 'Aurora', 'Lakewood', 'Parker', 'Littleton', 'Centennial',
  'Highlands Ranch', 'Westminster', 'Castle Rock', 'Lone Tree', 'Colorado Springs', 'Arvada',
  'Thornton', 'Boulder', 'Broomfield', 'Golden', 'Englewood', 'Longmont',
  'Fort Collins', 'Commerce City', 'Brighton', 'Northglenn', 'Loveland', 'Castle Pines'
];

const formPromises = [
  {
    title: '100% Free, No-Obligation Estimate',
    desc: 'Accurate quote at zero cost, no pressure.'
  },
  {
    title: '🎁 Free Carpet Or $500 Off',
    desc: 'Limited-time offer on your basement remodel!'
  },
  {
    title: 'Fast 24-Hour Response',
    desc: 'We respond quickly and schedule site visits within days.'
  },
  {
    title: 'Licensed Colorado Contractor',
    desc: 'Fully licensed, bonded, and insured.'
  },
  {
    title: 'Financing Available',
    desc: 'Flexible payment options for your dream basement.'
  }
];

export default function BasementRemodeling() {
  // LeadConnector's script resizes the embedded form to fit its fields
  useEffect(() => {
    if (document.querySelector(`script[src="${FORM_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = FORM_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Helmet>
        <title>Basement Remodeling Denver | Basement Finishing Contractors | JRC</title>
        <meta
          name="description"
          content="Premium basement remodeling and finishing across Colorado. 500+ basements completed, licensed and insured. Free carpet or $500 off your basement remodel."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/basement-remodeling/" />
      </Helmet>

      <article className="basement-page">
        {/* ==========================================
            SECTION 1: HERO
           ========================================== */}
        <section className="base-hero">
          <div className="base-hero-media" aria-hidden="true">
            <img src="/assets/images/basement-hero.jpg" alt="" />
          </div>

          <div className="base-container base-hero-inner">
            <span className="base-hero-flag">
              <span aria-hidden="true">&#127873;</span> {OFFER_LINE}
            </span>

            <h1 className="base-hero-title">
              Transform Your Basement Into Beautiful Living Space
            </h1>

            <p className="base-hero-sub">
              Premium basement remodeling designed for comfort, style, and long lasting
              quality across Colorado.
            </p>

            <div className="base-hero-cta">
              <a href="#estimate-form" className="base-btn base-btn-primary">
                Get Your Free Estimate <span aria-hidden="true">&rarr;</span>
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="base-btn base-btn-outline">
                {COMPANY.phone}
              </a>
            </div>

            <ul className="base-hero-stats">
              {heroStats.map((stat) => (
                <li key={stat.label}>
                  <span className="base-hero-stat-value">{stat.value}</span>
                  <span className="base-hero-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: KEYWORD TICKER
           ========================================== */}
        <section className="base-ticker" aria-hidden="true">
          <div className="base-ticker-track">
            {[0, 1].map((pass) => (
              <ul className="base-ticker-list" key={pass}>
                {tickerItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: SERVICES
           ========================================== */}
        <section className="base-sec">
          <div className="base-container">
            <div className="base-head base-head-center">
              <span className="base-eyebrow">Custom Basement Remodeling Services</span>
              <h2 className="base-title">
                Complete Basement Finishing &amp;{' '}
                <span className="base-accent">Renovation Solutions</span> Near You
              </h2>
              <p className="base-sub">
                From unfinished basements to luxury living spaces &mdash; our experienced
                local team handles every aspect of your basement remodel.
              </p>
            </div>

            <div className="base-services">
              {basementServices.map((item) => (
                <div className="base-service" key={item.title}>
                  <span className="base-service-icon" aria-hidden="true">{item.icon}</span>
                  <h3 className="base-service-title">{item.title}</h3>
                  <p className="base-service-desc">{item.desc}</p>
                  <a href="#estimate-form" className="base-service-link">
                    Get A Quote <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: TRANSFORMATIONS
           ========================================== */}
        <section className="base-sec base-sec-navy">
          <div className="base-container base-transform-grid">
            <figure className="base-split">
              <img
                src="/assets/images/basement-before-after.jpg"
                alt="Unfinished basement on the left and the finished media room with built-in entertainment centre on the right"
                loading="lazy"
              />
            </figure>

            <div className="base-transform-body">
              <span className="base-eyebrow">Transformations</span>
              <h2 className="base-title base-title-light">See The JRC Difference</h2>

              <p className="base-sub base-sub-light">
                This dark, unfinished basement was transformed into a stunning modern
                living area with a built-in entertainment center, wet bar, and luxury
                vinyl flooring &mdash; adding serious value to the home.
              </p>
              <p className="base-sub base-sub-light">
                Every project begins with a free consultation and ends with a space
                you&rsquo;ll love. We&rsquo;ve completed over 500 basement transformations
                across the Denver metro area.
              </p>

              <ul className="base-transform-stats">
                {transformStats.map((stat) => (
                  <li key={stat.label}>
                    <span className="base-transform-stat-value">{stat.value}</span>
                    <span className="base-transform-stat-label">{stat.label}</span>
                  </li>
                ))}
              </ul>

              <a href="#estimate-form" className="base-btn base-btn-primary">
                Get Your Free Estimate <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: WHY CHOOSE JRC
           ========================================== */}
        <section className="base-sec base-sec-grey">
          <div className="base-container base-why-grid">
            <div className="base-why-body">
              <span className="base-eyebrow">Why Choose JRC?</span>
              <h2 className="base-title">
                Colorado&rsquo;s Most Trusted{' '}
                <span className="base-accent">Basement Contractors</span>
              </h2>
              <p className="base-sub">
                We don&rsquo;t just finish basements &mdash; we create spaces your family
                will love. Here&rsquo;s what sets JRC apart from other local basement
                contractors.
              </p>
              <a href="#estimate-form" className="base-btn base-btn-primary">
                Start Your Project <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <ul className="base-why-list">
              {whyChoose.map((item) => (
                <li className="base-why-item" key={item.title}>
                  <span className="base-why-icon" aria-hidden="true">{item.icon}</span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: VIDEOS
           ========================================== */}
        <section className="base-sec">
          <div className="base-container">
            <div className="base-head base-head-center">
              <span className="base-eyebrow">See Our Work</span>
              <h2 className="base-title">
                Watch Our Basement{' '}
                <span className="base-accent">Transformations</span>
              </h2>
              <p className="base-sub">
                Real basement remodeling projects from across Colorado.
              </p>
            </div>

            <div className="base-videos">
              {basementVideos.map((clip) => (
                <div className="base-video-card" key={clip.id}>
                  <div className="base-video-frame">
                    <iframe
                      title="Basement remodeling project video"
                      src={`https://player.vimeo.com/video/${clip.id}?h=${clip.hash}`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 7: PROCESS
           ========================================== */}
        <section className="base-sec base-sec-blue">
          <div className="base-container">
            <div className="base-head base-head-center">
              <span className="base-eyebrow base-eyebrow-light">How It Works</span>
              <h2 className="base-title base-title-light">
                Your Basement Remodel, Simplified
              </h2>
              <p className="base-sub base-sub-light">
                From first call to final walkthrough &mdash; stress-free and transparent.
              </p>
            </div>

            <ol className="base-steps">
              {processSteps.map((step) => (
                <li className="base-step" key={step.num}>
                  <span className="base-step-num">{step.num}</span>
                  <h3 className="base-step-title">{step.title}</h3>
                  <p className="base-step-desc">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ==========================================
            SECTION 8: REVIEWS
           ========================================== */}
        <section className="base-sec">
          <div className="base-container">
            <div className="base-head base-head-center">
              <span className="base-eyebrow">Client Reviews</span>
              <h2 className="base-title">
                Trusted By Homeowners{' '}
                <span className="base-accent">Across Colorado</span>
              </h2>
            </div>

            <div className="base-reviews">
              {basementReviews.map((review) => (
                <blockquote className="base-review" key={review.author}>
                  <div className="base-stars" aria-label="Rated 5 out of 5">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p className="base-review-quote">&ldquo;{review.quote}&rdquo;</p>
                  <footer className="base-review-by">
                    <span className="base-review-avatar" aria-hidden="true">
                      {review.initials}
                    </span>
                    <span>
                      <span className="base-review-name">{review.author}</span>
                      <span className="base-review-place">{review.place}</span>
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 9: SERVICE AREAS
           ========================================== */}
        <section className="base-sec base-sec-blue">
          <div className="base-container">
            <div className="base-head base-head-center">
              <span className="base-eyebrow base-eyebrow-light">Service Areas</span>
              <h2 className="base-title base-title-light">
                Basement Remodeling &amp; Finishing Across Colorado
              </h2>
              <p className="base-sub base-sub-light">
                Based in Denver &mdash; our basement contractors serve the entire Front Range.
              </p>
            </div>

            <ul className="base-areas">
              {serviceAreas.map((city) => (
                <li className="base-area" key={city}>
                  <span aria-hidden="true">&#128205;</span> {city}
                </li>
              ))}
            </ul>

            <div className="base-areas-foot">
              <p>Don&rsquo;t see your area? We likely serve it!</p>
              <a href={`tel:${COMPANY.phoneRaw}`} className="base-btn base-btn-white">
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 10: ESTIMATE FORM
           ========================================== */}
        <section id="estimate-form" className="base-sec base-sec-grey">
          <div className="base-container base-form-grid">
            <div className="base-form-left">
              <span className="base-eyebrow">Get Started</span>
              <h2 className="base-title">
                Request Your Free Basement Remodeling Estimate
              </h2>
              <p className="base-sub">
                Fill out the form and a basement remodeling specialist will contact you
                within 24 hours. No obligation &mdash; just honest advice from
                Colorado&rsquo;s trusted basement contractors.
              </p>

              <ul className="base-form-promises">
                {formPromises.map((item) => (
                  <li key={item.title}>
                    <span className="base-check" aria-hidden="true">&#10003;</span>
                    <span>
                      <strong>{item.title}</strong>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="base-form-call">
                <strong>Prefer to talk?</strong>
                <span>
                  Call us at <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
                </span>
              </div>
            </div>

            <div className="base-form-right">
              <div className="base-form-banner">
                <span aria-hidden="true">&#127873;</span> Limited Time &mdash; Free Carpet Or $500 Off!
              </div>

              <div className="base-form-head">
                <h3 className="base-form-title">Get Your Free Quote</h3>
                <p className="base-form-note">Takes less than 2 minutes</p>
              </div>

              <iframe
                src={FORM_SRC}
                id={`inline-${FORM_ID}`}
                title="Get Your Free Quote"
                className="base-form-embed"
                scrolling="no"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Basement Remodeling Estimate"
                data-form-id={FORM_ID}
                data-layout-iframe-id={`inline-${FORM_ID}`}
                data-height="1150"
              />
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 11: CLOSING CTA
           ========================================== */}
        <section className="base-sec base-sec-blue base-final">
          <div className="base-container base-final-inner">
            <h2 className="base-title base-title-light">Ready To Transform Your Basement?</h2>
            <p className="base-sub base-sub-light">
              Join 500+ Colorado homeowners who trusted JRC for their basement remodel.
            </p>
            <div className="base-hero-cta base-final-cta">
              <a href="#estimate-form" className="base-btn base-btn-primary">
                Get Free Estimate <span aria-hidden="true">&rarr;</span>
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="base-btn base-btn-outline">
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            STICKY OFFER BAR
           ========================================== */}
        <div className="base-sticky">
          <span className="base-sticky-copy">
            <span aria-hidden="true">&#127873;</span> {OFFER_LINE}
          </span>
          <span className="base-sticky-actions">
            <a href={`tel:${COMPANY.phoneRaw}`} className="base-sticky-call">
              Call Now
            </a>
            <a href="#estimate-form" className="base-sticky-quote">
              Get Quote
            </a>
          </span>
        </div>
      </article>
    </>
  );
}
