import Image from "next/image";
import EnvelopeIntro from "@/components/EnvelopeIntro";
import Countdown from "@/components/Countdown";
import FloatingRsvp from "@/components/FloatingRsvp";
import Marquee from "@/components/Marquee";
import MusicPlayer from "@/components/MusicPlayer";
import Petals from "@/components/Petals";
import Reveal from "@/components/Reveal";
import RsvpForm from "@/components/RsvpForm";
import {
  CakeIcon,
  FloralDivider,
  GlassIcon,
  Monogram,
  MusicIcon,
  RingsIcon,
  Sprig,
} from "@/components/Ornaments";

const WEDDING_DATE = "2027-06-15T16:30:00";
const BRIDE = "Kristine";
const GROOM = "Ejay";
const VENUE_NAME = "The Willow Grove Estate";
const VENUE_LINE = "1420 Vineyard Lane, Sonoma, California";

const SCHEDULE = [
  { time: "4:30 PM", title: "Ceremony", note: "The Olive Terrace", Icon: RingsIcon },
  { time: "5:30 PM", title: "Cocktails", note: "Garden Lawn", Icon: GlassIcon },
  { time: "7:00 PM", title: "Dinner", note: "The Long Table", Icon: CakeIcon },
  { time: "9:00 PM", title: "Dancing", note: "Until the last song", Icon: MusicIcon },
];

const GALLERY = [
  { src: "/images/venue/venue-06.jpg", span: "sm:col-span-4", ratio: "aspect-[4/3]" },
  { src: "/images/venue/venue-09.jpg", span: "sm:col-span-2", ratio: "aspect-[3/4]" },
  { src: "/images/venue/venue-01.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/venue/venue-07.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/venue/venue-02.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/venue/venue-04.jpg", span: "sm:col-span-3", ratio: "aspect-[3/2]" },
  { src: "/images/venue/venue-05.jpg", span: "sm:col-span-3", ratio: "aspect-[3/2]" },
];

export default function Home() {
  return (
    <>
      <EnvelopeIntro />
      <Petals />
      <MusicPlayer />
      <FloatingRsvp />

      <main className="bg-cream">
        {/* ── Hero ─────────────────────────────── */}
        <section className="relative flex min-h-[100svh] items-end justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/venue/venue-08.jpg"
              alt={`${BRIDE} and ${GROOM}`}
              fill
              priority
              sizes="100vw"
              className="filmic animate-ken-burns object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(28,6,12,0.62) 0%, rgba(28,6,12,0.3) 26%, rgba(35,8,15,0.66) 52%, rgba(28,6,12,0.9) 82%, rgba(20,4,9,0.97) 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-5 border border-gold/25 sm:inset-8" />

          <div className="absolute inset-x-0 top-9 flex justify-center sm:top-12">
            <Monogram className="h-16 w-16 text-gold-light/70 sm:h-20 sm:w-20" />
          </div>

          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-8 pb-20 text-center text-cream sm:pb-24">
            <span className="text-[0.62rem] uppercase tracking-label text-cream/70">
              Together with our families
            </span>

            <h1 className="mt-5 flex flex-col items-center leading-[0.82]">
              <span className="font-script text-[3.6rem] sm:text-8xl">
                {BRIDE}
              </span>
              <span className="my-1 flex items-center gap-4 sm:my-2">
                <span className="h-px w-10 bg-gold/50 sm:w-16" />
                <span className="foil font-script text-3xl sm:text-4xl">&</span>
                <span className="h-px w-10 bg-gold/50 sm:w-16" />
              </span>
              <span className="font-script text-[3.6rem] sm:text-8xl">
                {GROOM}
              </span>
            </h1>

            <p className="mt-7 text-[0.62rem] uppercase tracking-label text-cream/80 sm:text-xs">
              Saturday · June 15, 2027
            </p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-label text-gold-light/80">
              Sonoma, California
            </p>

            <div className="mt-10 flex flex-col items-center gap-2 text-cream/50">
              <span className="text-[0.55rem] uppercase tracking-label">
                Scroll
              </span>
              <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
            </div>
          </div>
        </section>

        <Marquee
          items={[
            "Save the Date",
            "06 . 15 . 27",
            "Sonoma, California",
            "Black Tie Optional",
          ]}
        />

        {/* ── Invitation ───────────────────────── */}
        <section className="grain relative overflow-hidden bg-cream px-6 py-24 sm:py-32">
          <Sprig className="pointer-events-none absolute -left-4 top-16 h-56 w-24 text-wine/10 sm:left-8 sm:h-80 sm:w-32" />
          <Sprig className="pointer-events-none absolute -right-4 bottom-16 h-56 w-24 -scale-x-100 text-wine/10 sm:right-8 sm:h-80 sm:w-32" />

          <div className="relative mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                The Invitation
              </span>
              <FloralDivider className="mx-auto mt-6 h-8 w-64 text-gold" />
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-10 font-serif text-xl leading-relaxed text-wine-deep/85 sm:text-2xl">
                We found our favourite people, our favourite hill, and a
                Saturday in June. Now all that&apos;s missing is you.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 text-sm leading-loose text-wine-deep/60">
                Join us for an evening of vows under the olive trees, long
                tables, warm light, and dancing well past our bedtime. Come
                hungry, come ready to cry a little, and stay for the last song.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 font-script text-4xl text-wine sm:text-5xl">
                {VENUE_NAME}
              </div>
              <p className="mt-4 text-[0.65rem] uppercase tracking-label text-wine-deep/60">
                {VENUE_LINE}
              </p>
              <FloralDivider className="mx-auto mt-8 h-8 w-64 rotate-180 text-gold" />
            </Reveal>
          </div>
        </section>

        {/* ── Countdown ────────────────────────── */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <Image
            src="/images/venue/venue-10.jpg"
            alt=""
            fill
            sizes="100vw"
            className="filmic object-cover"
          />
          <div className="absolute inset-0 bg-wine-deep/88" />
          <div className="pointer-events-none absolute inset-6 border border-gold/20 sm:inset-10" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <Reveal>
              <span className="text-[0.6rem] uppercase tracking-label text-gold-light/70">
                Until we say I do
              </span>
            </Reveal>
            <Reveal delay={120} className="mt-10 w-full">
              <Countdown target={WEDDING_DATE} />
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-12 font-script text-3xl text-cream/90 sm:text-4xl">
                and counting
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── The Day ──────────────────────────── */}
        <section className="bg-parchment px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                The Order of the Day
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light text-wine-deep sm:text-5xl">
                How it unfolds
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {SCHEDULE.map(({ time, title, note, Icon }, i) => (
                <Reveal key={title} delay={i * 110}>
                  <div className="flex flex-col items-center text-center">
                    <Icon className="h-11 w-11 text-gold" />
                    <span className="mt-5 text-[0.6rem] uppercase tracking-label text-wine/60">
                      {time}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-wine-deep">
                      {title}
                    </h3>
                    <div className="my-3 h-px w-8 bg-gold/50" />
                    <p className="text-sm italic text-wine-deep/55">{note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story + polaroids ────────────────── */}
        <section className="grain relative bg-cream px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
            <Reveal className="relative mx-auto h-[420px] w-full max-w-sm sm:h-[520px]">
              <div className="absolute left-0 top-0 w-[56%] rotate-[-5deg] bg-white p-3 pb-10 shadow-[0_30px_50px_-24px_rgba(47,10,19,0.55)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/venue/venue-09.jpg"
                    alt=""
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 60vw, 240px"
                    className="filmic object-cover"
                  />
                </div>
                <span className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-wine/70">
                  she said yes
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-[56%] rotate-[4deg] bg-white p-3 pb-10 shadow-[0_30px_50px_-24px_rgba(47,10,19,0.55)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/venue/venue-10.jpg"
                    alt=""
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 60vw, 240px"
                    className="filmic object-cover"
                  />
                </div>
                <span className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-wine/70">
                  golden hour
                </span>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Our Story
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-wine-deep sm:text-5xl">
                A hill, a sunset,
                <br />
                and one good question
              </h2>
              <div className="my-7 h-px w-20 bg-gold/60" />
              <p className="text-sm leading-loose text-wine-deep/65">
                It started with a walk that was supposed to be twenty minutes
                and turned into three hours. Somewhere between the overgrown
                path and the view at the top, we ran out of small talk and
                started making plans instead.
              </p>
              <p className="mt-5 text-sm leading-loose text-wine-deep/65">
                Years later, on the same hill, with calla lilies and a slightly
                shaking hand, the question finally got asked. The answer took
                about half a second.
              </p>
              <p className="mt-8 font-script text-3xl text-wine">
                {BRIDE} &amp; {GROOM}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────── */}
        <section className="bg-wine-deep px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <span className="text-[0.6rem] uppercase tracking-label text-gold-light/70">
                A Few Favourites
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light text-cream sm:text-5xl">
                The place, the people
              </h2>
              <FloralDivider className="mx-auto mt-7 h-8 w-64 text-gold/70" />
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-4">
              {GALLERY.map(({ src, span, ratio }, i) => (
                <Reveal key={src} delay={(i % 3) * 90} className={span}>
                  <div
                    className={`group relative overflow-hidden ${ratio}`}
                    style={{ boxShadow: "inset 0 0 0 1px rgba(230,201,140,0.2)" }}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="filmic object-cover transition duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-wine-deep/25 transition duration-700 group-hover:bg-transparent" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Details ──────────────────────────── */}
        <section className="bg-parchment px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-4xl gap-14 text-center sm:grid-cols-3 sm:text-left">
            <Reveal>
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Dress Code
              </span>
              <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                Black tie optional
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                Long dresses, dark suits. Grass underfoot — bring the sensible
                shoes and change into the pretty ones.
              </p>
              <div className="mt-5 flex justify-center gap-2 sm:justify-start">
                {["var(--wine)", "var(--dusty-blue)", "var(--gold)", "var(--blush)"].map(
                  (c) => (
                    <span
                      key={c}
                      className="h-7 w-7 rounded-full ring-1 ring-wine-deep/15"
                      style={{ background: c }}
                    />
                  ),
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Getting There
              </span>
              <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                {VENUE_NAME}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                {VENUE_LINE}. Parking on site, and a shuttle from town every
                half hour from 3:30 PM.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Good to Know
              </span>
              <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                Adults only, please
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                We adore your little ones — this one is a late night, so leave
                them with a sitter and enjoy the evening off.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── RSVP ─────────────────────────────── */}
        <section
          id="rsvp"
          className="relative overflow-hidden bg-wine px-6 py-24 text-center sm:py-32"
        >
          <div className="pointer-events-none absolute inset-6 border border-gold/20 sm:inset-10" />
          <div className="relative mx-auto max-w-xl">
            <Reveal>
              <Monogram className="mx-auto h-14 w-14 text-gold-light/70" />
              <span className="mt-6 block text-[0.6rem] uppercase tracking-label text-gold-light/75">
                Kindly Reply
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light text-cream sm:text-5xl">
                Will you be there?
              </h2>
              <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
                Leave us your name and we&apos;ll save your seat. The formal
                invitation follows closer to the day.
              </p>
              <RsvpForm />
              <p className="mt-8 text-[0.6rem] uppercase tracking-label text-cream/45">
                Formal invitation to follow
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ───────────────────────────── */}
        <footer className="bg-wine-ink py-16 text-center text-cream">
          <Monogram className="mx-auto h-12 w-12 text-gold/60" />
          <span className="mt-5 block text-[0.55rem] uppercase tracking-label text-cream/45">
            Sincerely
          </span>
          <div className="mt-3 font-script text-4xl text-cream/90">
            {BRIDE} &amp; {GROOM}
          </div>
          <div className="mt-5 text-[0.55rem] uppercase tracking-label text-gold/50">
            06 · 15 · 27
          </div>
        </footer>
      </main>
    </>
  );
}
