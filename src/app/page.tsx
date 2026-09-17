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

// TODO: set the real wedding date. Left null on purpose — a placeholder date on
// a live invitation is worse than none, so the date line and countdown stay
// hidden until this is filled in.
const WEDDING_DATE: string | null = null;
const DATE_LABEL = "Date to follow";

const BRIDE = "Kristine";
const GROOM = "Ejay";

const CHURCH = "Iglesia Ni Cristo";
const CHURCH_LOCAL = "Lokal ng Metro Manila Hills";
const CHURCH_ADDRESS = "Blk 75 Lot 4a, MMH San Jose, Rodriguez, Rizal";

const RECEPTION = "Costa Abril Resort";
const RECEPTION_ADDRESS = "49 Dao St, Rodriguez, Rizal";

const SCHEDULE = [
  {
    time: "2:00 PM",
    title: "Ceremony",
    note: "Iglesia Ni Cristo, Metro Manila Hills",
    Icon: RingsIcon,
  },
  {
    time: "5:00 PM",
    title: "Reception",
    note: "Doors open at Costa Abril",
    Icon: GlassIcon,
  },
  {
    time: "6:10 PM",
    title: "Dinner",
    note: "Then cake, and a few kind words",
    Icon: CakeIcon,
  },
  {
    time: "8:05 PM",
    title: "After Party",
    note: "Singing, dancing, no rush home",
    Icon: MusicIcon,
  },
];

const GALLERY = [
  { src: "/images/couple/piggyback.jpg", span: "sm:col-span-4", ratio: "aspect-[4/3]" },
  { src: "/images/couple/bouquet.jpg", span: "sm:col-span-2", ratio: "aspect-[3/4]" },
  { src: "/images/couple/lamplight.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/couple/lapel.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/couple/steps.jpg", span: "sm:col-span-2", ratio: "aspect-square" },
  { src: "/images/couple/walking-away.jpg", span: "sm:col-span-3", ratio: "aspect-[3/2]" },
  { src: "/images/couple/night.jpg", span: "sm:col-span-3", ratio: "aspect-[3/2]" },
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
              src="/images/couple/silhouette.jpg"
              alt={`${BRIDE} and ${GROOM} at sunset`}
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
              {DATE_LABEL}
            </p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-label text-gold-light/80">
              Rodriguez, Rizal
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
            DATE_LABEL,
            "Rodriguez, Rizal",
            "Dress Code: Black",
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
                We found our favourite person, our favourite hill, and a
                Saturday worth dressing up for. Now all that&apos;s missing is
                you.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 text-sm leading-loose text-wine-deep/60">
                Join us as we say our vows, then carry the celebration up the
                road for dinner, singing far too loudly, and dancing well past
                our bedtime.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-12 font-script text-4xl text-wine sm:text-5xl">
                {CHURCH_LOCAL}
              </div>
              <p className="mt-4 text-[0.65rem] uppercase tracking-label text-wine-deep/60">
                {CHURCH_ADDRESS}
              </p>
              <FloralDivider className="mx-auto mt-8 h-8 w-64 rotate-180 text-gold" />
            </Reveal>
          </div>
        </section>

        {/* ── Countdown ────────────────────────── */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <Image
            src="/images/couple/foreheads.jpg"
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
            {WEDDING_DATE ? (
              <>
                <Reveal delay={120} className="mt-10 w-full">
                  <Countdown target={WEDDING_DATE} />
                </Reveal>
                <Reveal delay={240}>
                  <p className="mt-12 font-script text-3xl text-cream/90 sm:text-4xl">
                    and counting
                  </p>
                </Reveal>
              </>
            ) : (
              <Reveal delay={120}>
                <p className="mt-8 font-script text-4xl text-cream/90 sm:text-5xl">
                  very soon
                </p>
                <p className="mt-6 text-[0.62rem] uppercase tracking-label text-gold-light/60">
                  The date is being finalised
                </p>
              </Reveal>
            )}
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

            <Reveal delay={200}>
              <p className="mx-auto mt-14 max-w-md text-center text-sm italic leading-relaxed text-wine-deep/55">
                Please come a little early — the ceremony starts promptly, and
                we&apos;d hate for you to miss the walk down the aisle.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Where ────────────────────────────── */}
        <section className="grain relative bg-cream px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Where to find us
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light text-wine-deep sm:text-5xl">
                Two stops, five minutes apart
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-10 md:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl sm:aspect-[4/3]">
                  <Image
                    src="/images/couple/church.jpg"
                    alt={`${CHURCH}, ${CHURCH_LOCAL}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <span className="mt-6 block text-[0.6rem] uppercase tracking-label text-wine/50">
                  The Ceremony · 2:00 PM
                </span>
                <h3 className="mt-3 font-serif text-2xl text-wine-deep">
                  {CHURCH}
                </h3>
                <p className="mt-1 font-script text-2xl text-wine">
                  {CHURCH_LOCAL}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  {CHURCH_ADDRESS}
                </p>
                <p className="mt-4 text-sm italic text-wine-deep/55">
                  Our ceremony is gadget-free — please keep phones and cameras
                  away so everyone can be fully present.
                </p>
              </Reveal>

              <Reveal delay={140}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl sm:aspect-[4/3]">
                  <Image
                    src="/images/couple/costa-abril.jpg"
                    alt={RECEPTION}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <span className="mt-6 block text-[0.6rem] uppercase tracking-label text-wine/50">
                  The Reception · 5:00 PM
                </span>
                <h3 className="mt-3 font-serif text-2xl text-wine-deep">
                  {RECEPTION}
                </h3>
                <p className="mt-1 font-script text-2xl text-wine">
                  Dinner &amp; celebration
                </p>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  {RECEPTION_ADDRESS}
                </p>
                <p className="mt-4 text-sm italic text-wine-deep/55">
                  Doors open at five. Come hungry — dinner is served just after
                  six.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Story + polaroids ────────────────── */}
        <section className="bg-parchment px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">
            <Reveal className="relative mx-auto h-[420px] w-full max-w-sm sm:h-[520px]">
              <div className="absolute left-0 top-0 w-[56%] rotate-[-5deg] bg-white p-3 pb-10 shadow-[0_30px_50px_-24px_rgba(47,10,19,0.55)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/couple/forest.jpg"
                    alt=""
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 60vw, 240px"
                    className="filmic object-cover"
                  />
                </div>
                <span className="absolute bottom-3 left-0 right-0 text-center font-script text-lg text-wine/70">
                  just us
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-[56%] rotate-[4deg] bg-white p-3 pb-10 shadow-[0_30px_50px_-24px_rgba(47,10,19,0.55)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/couple/ring.jpg"
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
                and turned into three hours. Somewhere between the pine trees
                and the view at the top, we ran out of small talk and started
                making plans instead.
              </p>
              <p className="mt-5 text-sm leading-loose text-wine-deep/65">
                Years later, with calla lilies and a slightly shaking hand, the
                question finally got asked. The answer took about half a second.
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
                The two of us, so far
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
          <div className="mx-auto max-w-5xl">
            <Reveal className="mb-16 text-center">
              <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                Good to Know
              </span>
              <h2 className="mt-5 font-serif text-4xl font-light text-wine-deep sm:text-5xl">
                The details
              </h2>
            </Reveal>

            <div className="grid gap-14 text-center sm:grid-cols-3 sm:text-left">
              <Reveal>
                <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                  Dress Code
                </span>
                <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                  Guests in black
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  Anything from the black palette. Kindly no t-shirts, denim,
                  slippers or sports shoes.
                </p>
                <div className="mt-5 flex justify-center gap-2 sm:justify-start">
                  {["#000000", "#111111", "#1c1c1c", "#262626", "#333333"].map(
                    (c) => (
                      <span
                        key={c}
                        className="h-7 w-7 rounded-full ring-1 ring-wine-deep/15"
                        style={{ background: c }}
                      />
                    ),
                  )}
                </div>

                <span className="mt-8 block text-[0.6rem] uppercase tracking-label text-wine/50">
                  Principal Sponsors
                </span>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  Burgundy, in any shade you like.
                </p>
                <div className="mt-4 flex justify-center gap-2 sm:justify-start">
                  {["#2B0A07", "#3F0A12", "#6E1116", "#91161C", "#B3242B"].map((c) => (
                    <span
                      key={c}
                      className="h-7 w-7 rounded-full ring-1 ring-wine-deep/15"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                  A Gadget-Free Ceremony
                </span>
                <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                  Be with us, not behind a screen
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  Please keep phones and cameras tucked away during the
                  ceremony. Our photographer has it covered, and we&apos;ll
                  happily share every shot afterwards.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <span className="text-[0.6rem] uppercase tracking-label text-wine/50">
                  Gift Guide
                </span>
                <h3 className="mt-4 font-serif text-2xl text-wine-deep">
                  Your presence is the gift
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wine-deep/60">
                  Gifts are truly not expected. Should you wish to bless us, a
                  monetary gift would help us begin our married life together.
                </p>
              </Reveal>
            </div>
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
            Rodriguez, Rizal
          </div>
        </footer>
      </main>
    </>
  );
}
