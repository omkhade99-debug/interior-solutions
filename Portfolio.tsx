import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  contact: string;
  projectType: string;
  message: string;
}

const offices = [
  {
    city: 'Nagpur Office',
    address: 'Jai Durga Housing Society 6,\nNew Manish Nagar, Somalwada,\nNagpur, Maharashtra 441108',
    phone: '76204 36878',
    mapLink:
      'https://maps.app.goo.gl/y5hwhbeBATiJmvVb8',
  },
  {
    city: 'Chandrapur Office',
    address: 'Behind Sai Temple,\nCivil Lines,\nChandrapur, Maharashtra',
    phone: '97670 94859',
    mapLink: 'https://maps.app.goo.gl/L7Xvkg4v1Aych8Wy8',
  },
];

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('https://formspree.io/f/mnjrjwyk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setFormSubmitted(true);
      toast.success("Thank you! We'll be in touch within 24 hours.");
      reset();

      setTimeout(() => setFormSubmitted(false), 5000);
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  } catch (error) {
    toast.error('Network error. Please try again.');
  }
};
  return (
    <section
      id="contact"
      className="bg-[var(--dark2)] grid md:grid-cols-2 gap-16 items-start px-[4%] py-24"
    >
      {/* Contact Intro */}
      <div>
        <p className="flex items-center gap-4 text-[0.72rem] tracking-[0.25em] uppercase text-[var(--gold)] mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--border-gold)] after:max-w-[80px]">
          Get In Touch
        </p>
        <h2 className="mb-4">
          Let's design
          <br />
          your <em className="italic text-[var(--gold)]">dream</em>
          <br />
          space together.
        </h2>
        <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed mb-8">
          Whether you have a clear vision or are starting from scratch, we'd love
          to hear about your project. Reach out to either of our offices or use
          the form.
        </p>

        <a
          href="mailto:interiorsolutions1125@gmail.com"
          className="inline-block text-[var(--gold)] no-underline border-b border-[var(--border-gold)] pb-1 mb-8 transition-colors duration-200 hover:border-[var(--gold)]"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}
        >
          interiorsolutions1125@gmail.com
        </a>

        {/* Offices */}
        <div className="grid gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className="p-7 border border-[var(--border-gold)] bg-[var(--dark3)] relative transition-colors duration-250 hover:border-[var(--gold)]"
            >
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--gold)] flex items-center gap-1"
              >
                <MapPin size={12} />
                View Map
              </a>
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-3">
                {office.city}
              </p>
              <p className="text-[0.88rem] text-[var(--text)] leading-relaxed mb-4 whitespace-pre-line">
                {office.address}
              </p>
              <p
                className="text-[1.2rem] text-[var(--text-muted)] tracking-wider"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {office.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <p className="text-[0.72rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-6">
          Send a Message
        </p>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-[var(--text-muted)]">Your Name</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 bg-[var(--dark3)] border border-[var(--border-gold)] text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--gold)]"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <span className="text-[0.75rem] text-[var(--gold)]">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <label className="text-[var(--text-muted)]">Your Phone Number</label>
              <input
                type="text"
                placeholder="How should we reach you?"
                className="w-full px-4 py-3 bg-[var(--dark3)] border border-[var(--border-gold)] text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--gold)]"
                {...register('contact', { required: 'Contact info is required' })}
              />
              {errors.contact && (
                <span className="text-[0.75rem] text-[var(--gold)]">
                  {errors.contact.message}
                </span>
              )}
            </div>

            <div className="grid gap-2">
              <label className="text-[var(--text-muted)]">Project Type</label>
              <select
                className="w-full px-4 py-3 bg-[var(--dark3)] border border-[var(--border-gold)] text-[var(--text)] outline-none appearance-none cursor-pointer transition-colors duration-200 focus:border-[var(--gold)]"
                {...register('projectType')}
              >
                <option value="">Select project type</option>
                <option>Residential — New Home</option>
                <option>Residential — Renovation</option>
                <option>Commercial — Office</option>
                <option>Commercial — Retail / Showroom</option>
                <option>Consultation Only</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-[var(--text-muted)]">
                Tell us about your project
              </label>
              <textarea
                placeholder="Brief description, budget range, timeline…"
                className="w-full px-4 py-3 bg-[var(--dark3)] border border-[var(--border-gold)] text-[var(--text)] outline-none min-h-[110px] resize-y transition-colors duration-200 focus:border-[var(--gold)]"
                {...register('message')}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-4 bg-[var(--gold)] text-[var(--dark)] border-none text-[0.82rem] font-medium tracking-[0.12em] uppercase cursor-pointer transition-colors duration-200 mt-2 hover:bg-[var(--gold-light)]"
            >
              Send Enquiry
            </button>
          </form>
        ) : (
          <div className="mt-4 p-4 border border-[var(--gold)] text-[var(--gold)] text-[0.85rem] tracking-wider">
            ✓ &nbsp; Thank you! We'll be in touch within 24 hours.
          </div>
        )}
      </div>
    </section>
  );
}
