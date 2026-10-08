import { Helmet } from 'react-helmet-async';
import EstimateForm from '../components/forms/EstimateForm';
import { COMPANY } from '../content/siteData';
import '../styles/bathroom.css';

const OFFER = '$1,000';

const bathroomStats = [
  { value: '25+', label: 'Years In Business' },
  { value: '40+', label: 'Projects Completed' },
  { value: '5★', label: 'Google Rating' },
  { value: '0', label: 'Complaints In 30 Years' }
];

const bathroomHeroChips = [
  '★ 5-Star Rated',
  'Licensed & Insured',
  'Done in 1 Week',
  '✓ Free Estimate'
];

const bathroomServices = [
  {
    title: 'Walk-In Shower Conversions',
    desc: 'Replace your old tub with a modern walk-in shower. Custom tile, glass enclosures, built-in niches and barrier-free options available.',
    icon: '/assets/images/shower.png'
  },
  {
    title: 'Bathtub Replacement',
    desc: 'Upgrade to a freestanding soaker or spa-style tub. We handle plumbing, tile surrounds and all fixtures start to finish.',
    icon: '/assets/images/bathtub.png'
  },
  {
    title: 'Custom Vanity Installation',
    desc: 'Double-sink, floating or classic vanities built to fit your space with smart storage and a finish you will show off every day.',
    icon: '/assets/images/dresser.png'
  },
  {
    title: 'Tile Flooring and Walls',
    desc: 'Precision tile work with 15 years of craftsmanship. Ceramic, porcelain, marble, subway, hexagon and large-format styles available.',
    icon: '/assets/images/tile.png'
  },
  {
    title: 'Lighting and Fixture Upgrades',
    desc: 'Backlit mirrors, recessed LED lighting and modern fixtures that make your bathroom feel like a hotel suite every morning.',
    icon: '/assets/images/light.png'
  },
  {
    title: 'Full Bathroom Renovations',
    desc: 'Complete top-to-bottom transformation. Demo, plumbing, tile, vanity, lighting and every finishing detail handled by one crew.',
    icon: '/assets/images/bathroom-1.png'
  }
];

const bathroomSteps = [
  {
    step: '1',
    title: 'Free Consultation',
    desc: 'Call us or fill out the form. We discuss your vision, timeline and budget with zero pressure.'
  },
  {
    step: '2',
    title: 'Custom Design Plan',
    desc: 'Personalized layout with material choices and honest pricing before any work begins.'
  },
  {
    step: '3',
    title: 'Expert Installation',
    desc: 'Licensed crew arrives on schedule. Most bathrooms finished in just one week.'
  },
  {
    step: '4',
    title: 'Walk In and Love It',
    desc: 'Final walkthrough, site cleaned up, and a 90-day labor guarantee on every project.'
  }
];

const bathroomVideos = [
  { id: 'OFyJzUt8uR8', title: 'Bathroom Remodeling Denver CO | Before and After Transformation' },
  { id: 'WdUmMpNcQCE', title: 'Outdated Bathroom to Modern Upgrade | Bathroom Remodel Before After' },
  { id: 'N2gZoxeZ-Do', title: 'Bathroom Remodeling Services | Colorado' },
  { id: 'QaoNyK-t6jE', title: 'Bath Remodeling' }
];

const bathroomReviews = [
  {
    quote: 'JRC did an awesome job with our kitchen floor. Responsive, professional, great communication, showed up on time. We are so happy with the results and look forward to working with them again.',
    author: 'Bliss Bernal',
    initials: 'BB',
    place: 'Denver, CO'
  },
  {
    quote: 'I have used JRC twice. Once to add a bathroom to my basement, and again for a kitchen backsplash. Great pricing, communicative the whole way through, and both projects turned out beautifully.',
    author: 'Charissa Walton',
    initials: 'CW',
    place: 'Denver, CO'
  },
  {
    quote: 'Three bathrooms remodeled. Very impressed with the attention to detail on every one. Always on time, professional, easy to reach. Great work. Will not use anyone else.',
    author: 'Toni Starner',
    initials: 'TS',
    place: 'Lakewood, CO'
  }
];

const bathroomAreas = [
  'Aurora', 'Arvada', 'Lakewood', 'Denver', 'Boulder', 'Parker',
  'Castle Rock', 'Castle Pines', 'Monument', 'Wheat Ridge', 'Lone Tree', 'Golden',
  'Broomfield', 'Westminster', 'Brighton', 'Thornton', 'Centennial', 'Englewood'
];

const bathroomPromises = [
  'Free in-home consultation and written estimate',
  'Zero pressure, completely no obligation',
  'Licensed, insured and bonded contractors',
  'Most projects finished in just one week',
  '90-day labor guarantee on all work',
  'Serving 18 Colorado cities'
];

export default function BathroomRemodeling() {
  return (
    <>
      <Helmet>
        <title>Bathroom Remodeling Denver | {OFFER} OFF | JRC Home Remodeling</title>
        <meta
          name="description"
          content="Expert bathroom remodeling across Denver, Aurora and Lakewood. Licensed, insured and 5-star rated. Most projects finished in one week. Save $1,000 this month."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/bathroom-remodeling/" />
      </Helmet>

      <article className="bathroom-page">
        {/* ==========================================
            SECTION 1: HERO (navy, diagonal photo split)
           ========================================== */}
        <section className="bath-hero">
          <div className="bath-hero-media" aria-hidden="true">
            <img src="/assets/images/05_Main_Bathroom_IMG_1171-Copy-scaled-1.jpg" alt="" />
          </div>

          <div className="bath-container bath-hero-inner">
            <span className="bath-hero-flag">
              <i className="bath-hero-dot" aria-hidden="true" />
              Denver&rsquo;s Top Rated Bathroom Remodelers
            </span>

            <h1 className="bath-hero-title">
              Your Bathroom Should Feel Like{' '}
              <span className="bath-hero-accent">A Luxury Retreat</span>
            </h1>

            <p className="bath-hero-sub">
              Expert bathroom remodeling across Denver, Aurora, Lakewood and
              the surrounding Colorado cities. Licensed, insured and 5-star rated.
              Most projects finished in just one week.
            </p>

            <div className="bath-hero-offer">
              <span className="bath-hero-offer-amt">{OFFER}</span>
              <span className="bath-hero-offer-copy">
                <strong>OFF Your Bathroom Remodel</strong>
                Mention this page when you call or submit the form.
              </span>
            </div>

            <div className="bath-hero-cta">
              <a href="#estimate-form" className="bath-btn bath-btn-primary">
                Get My Free Estimate <span aria-hidden="true">&rarr;</span>
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="bath-btn bath-btn-dark">
                {COMPANY.phone}
              </a>
            </div>

            <ul className="bath-hero-chips">
              {bathroomHeroChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: STATS BAR (orange)
           ========================================== */}
        <section className="bath-stats">
          <div className="bath-container bath-stats-grid">
            {bathroomStats.map((stat) => (
              <div className="bath-stat" key={stat.label}>
                <span className="bath-stat-value">{stat.value}</span>
                <span className="bath-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: BEFORE / AFTER
           ========================================== */}
        <section className="bath-sec bath-sec-cream">
          <div className="bath-container">
            <div className="bath-head">
              <span className="bath-eyebrow">Our Recent Work</span>
              <h2 className="bath-title">Real Bathrooms We Have Transformed Across Colorado</h2>
              <p className="bath-sub">
                Every project is done by our own in-house crew. No subcontractors. No
                shortcuts. Clean work you will be proud of every single day.
              </p>
            </div>

            <div className="bath-ba">
              <figure className="bath-ba-card">
                <span className="bath-ba-tag bath-ba-tag-before">Before</span>
                <img
                  src="/assets/images/bath-gallery-1.webp"
                  alt="Dated bathroom with worn tile and a cramped layout before the remodel"
                  loading="lazy"
                />
                <figcaption>
                  <strong>The Old Bathroom</strong>
                  Dated fixtures, worn tile &amp; cramped layout
                </figcaption>
              </figure>

              <span className="bath-ba-arrow" aria-hidden="true">&rarr;</span>

              <figure className="bath-ba-card">
                <span className="bath-ba-tag bath-ba-tag-after">After</span>
                <img
                  src="/assets/images/bath-gallery-2.webp"
                  alt="Finished walk-in shower with subway tile and matte black fixtures"
                  loading="lazy"
                />
                <figcaption>
                  <strong>The Transformation</strong>
                  Custom walk-in shower, subway tile &amp; matte-black fixtures
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: SERVICES
           ========================================== */}
        <section className="bath-sec">
          <div className="bath-container">
            <div className="bath-head">
              <span className="bath-eyebrow">What We Do</span>
              <h2 className="bath-title">
                Bathroom Remodeling Services That Increase Your Home Value
              </h2>
              <p className="bath-sub">
                From a single tile upgrade to a full luxury renovation, our crew shows up
                on time, works clean, and delivers results you will love.
              </p>
            </div>

            <div className="bath-services">
              {bathroomServices.map((item) => (
                <div className="bath-service" key={item.title}>
                  <img
                    className="bath-service-icon"
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <h3 className="bath-service-title">{item.title}</h3>
                  <p className="bath-service-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: 4-STEP PROCESS
           ========================================== */}
        <section className="bath-sec bath-sec-cream">
          <div className="bath-container">
            <div className="bath-head">
              <span className="bath-eyebrow">How It Works</span>
              <h2 className="bath-title">From Your First Call to a Finished Bathroom in 4 Steps</h2>
              <p className="bath-sub">
                Your project manager handles everything. No stress, no surprises, no mess
                left behind.
              </p>
            </div>

            <div className="bath-process">
              <div className="bath-steps">
                {bathroomSteps.map((item) => (
                  <div className="bath-step" key={item.step}>
                    <span className="bath-step-num">{item.step}</span>
                    <div>
                      <h3 className="bath-step-title">{item.title}</h3>
                      <p className="bath-step-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <figure className="bath-process-media">
                <img
                  src="/assets/images/bath-gallery-3.webp"
                  alt="JRC tile installer setting subway tile around a new bathtub"
                  loading="lazy"
                />
                <figcaption className="bath-process-badge">
                  <strong>25+</strong>
                  <span>Years of<br />Expert Craftsmanship</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: $1,000 OFFER
           ========================================== */}
        <section className="bath-sec bath-sec-cream bath-offer-sec">
          <div className="bath-container bath-offer-grid">
            <figure className="bath-offer-media">
              <img
                src="/assets/images/bath-gallery-4.webp"
                alt="Side by side of a dated bathroom and the finished modern glass shower suite"
                loading="lazy"
              />
              <figcaption>
                <span className="bath-ba-tag bath-ba-tag-before">Before</span>
                <span className="bath-offer-arrow" aria-hidden="true">&rarr;</span>
                <span className="bath-ba-tag bath-ba-tag-after">After</span>
              </figcaption>
            </figure>

            <div className="bath-offer-body">
              <span className="bath-eyebrow">Limited Time Offer</span>
              <h2 className="bath-title">Save {OFFER} on Your Bathroom Remodel</h2>
              <p className="bath-sub">
                Book your free consultation this month and we will take {OFFER} off your
                project. Spots are limited so do not wait.
              </p>

              <div className="bath-offer-card">
                <div className="bath-offer-card-top">
                  <span className="bath-offer-card-amt">{OFFER}</span>
                  <span className="bath-offer-card-copy">
                    <strong>OFF Any Bathroom Remodel</strong>
                    Denver, CO and surrounding Colorado cities
                  </span>
                </div>

                <div className="bath-offer-card-bottom">
                  <p>
                    Show or mention this page when you call or submit the form below.
                    New customers only. One per household.
                  </p>
                  <a href="#estimate-form" className="bath-btn bath-btn-primary">
                    Claim {OFFER} Off <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <p className="bath-offer-terms">
                Valid for new customers. Minimum project value applies. Cannot be combined
                with other offers.
              </p>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 7: VIDEOS (navy, centered)
           ========================================== */}
        <section className="bath-sec bath-sec-navy">
          <div className="bath-container">
            <div className="bath-head bath-head-center">
              <span className="bath-eyebrow">See The Results</span>
              <h2 className="bath-title bath-title-light">Watch Real JRC Bathroom Projects</h2>
              <p className="bath-sub bath-sub-light">
                These are actual bathrooms we built for real homeowners right here in
                Colorado. This is the standard we deliver on every job.
              </p>
            </div>

            <div className="bath-videos">
              {bathroomVideos.map((clip) => (
                <div className="bath-video" key={clip.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${clip.id}`}
                    title={clip.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 8: REVIEWS
           ========================================== */}
        <section className="bath-sec bath-sec-cream">
          <div className="bath-container">
            <div className="bath-head">
              <span className="bath-eyebrow">Real Customer Reviews</span>
              <h2 className="bath-title">Why Denver Homeowners Keep Choosing JRC</h2>
              <p className="bath-sub">
                Reviews pulled directly from Google. Real people, real projects, real results.
              </p>
            </div>

            <div className="bath-reviews">
              {bathroomReviews.map((review) => (
                <blockquote className="bath-review" key={review.author}>
                  <div className="bath-stars" aria-label="Rated 5 out of 5">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p className="bath-review-quote">&ldquo;{review.quote}&rdquo;</p>
                  <footer className="bath-review-by">
                    <span className="bath-review-avatar" aria-hidden="true">{review.initials}</span>
                    <span>
                      <span className="bath-review-name">{review.author}</span>
                      <span className="bath-review-place">{review.place} &bull; Google</span>
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 9: SERVICE AREAS (navy)
           ========================================== */}
        <section className="bath-sec bath-sec-navy">
          <div className="bath-container">
            <div className="bath-head">
              <span className="bath-eyebrow">Where We Work</span>
              <h2 className="bath-title bath-title-light">
                Proudly Serving the Greater Denver Metro Area
              </h2>
              <p className="bath-sub bath-sub-light">
                Our bathroom remodeling crews serve homeowners across the entire Front
                Range. Not sure if we serve your city? Give us a call.
              </p>
            </div>

            <ul className="bath-areas">
              {bathroomAreas.map((city) => (
                <li className="bath-area" key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 10: BOOKING FORM
           ========================================== */}
        <section id="estimate-form" className="bath-sec bath-book">
          <div className="bath-container bath-book-grid">
            <div className="bath-book-left">
              <span className="bath-eyebrow">Free Estimate, No Obligation</span>
              <h2 className="bath-title bath-title-light">
                Book Your Free Consultation and Lock In {OFFER} Off
              </h2>

              <div className="bath-book-offer">
                <strong>{OFFER} OFF</strong>
                <span>Your Bathroom Remodel &bull; This Month Only</span>
              </div>

              <ul className="bath-promises">
                {bathroomPromises.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <ul className="bath-book-contact">
                <li>
                  <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </li>
                <li>{COMPANY.address}</li>
              </ul>
            </div>

            <div className="bath-book-right">
              <EstimateForm
                serviceName="Bathroom Remodeling"
                title="Get Your Free Estimate"
                subtitle="Fill out the form and we will call you within 24 hours"
                buttonText={`Claim My ${OFFER} Off`}
                showSms={true}
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
