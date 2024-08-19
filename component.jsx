import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <TwitchIcon className="w-8 h-8" />
          <span className="text-2xl font-bold">VAYU ESPORTS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            News
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Tournaments
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            YouTube
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Support
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon className="w-6 h-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-32 px-6 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-center">
              <TwitchIcon className="w-16 h-16" />
              <h1 className="text-5xl font-bold">VAYU ESPORTS</h1>
            </div>
            <h2 className="text-3xl font-bold">Unleashing the Power of Esports</h2>
            <p className="text-lg">
              Welcome to the official website of VAYU ESPORTS, where we are dedicated to pushing the boundaries of
              competitive gaming.
            </p>
          </div>
        </section>
        <section id="news" className="py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <p className="text-muted-foreground">
                Stay up-to-date with the latest news and updates from VAYU ESPORTS.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS Wins Regional Tournament</CardTitle>
                  <CardDescription>
                    Our team has emerged victorious in the regional championship, solidifying our position as a force to
                    be reckoned with.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="News 1"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS Announces New Roster</CardTitle>
                  <CardDescription>
                    We are excited to welcome our new roster of talented players, who will be representing VAYU ESPORTS
                    in the upcoming season.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="News 2"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS Hosts Charity Livestream</CardTitle>
                  <CardDescription>
                    Join us as we host a special charity livestream to support a local organization, showcasing our
                    commitment to giving back to the community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="News 3"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="tournaments" className="bg-muted py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Upcoming Tournaments</h2>
              <p className="text-muted-foreground">
                Check out the upcoming tournaments VAYU ESPORTS is participating in.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS at Esports Championship Series</CardTitle>
                  <CardDescription>
                    Join us as we compete in the prestigious Esports Championship Series, showcasing our skills on the
                    international stage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">June 15 - June 20</p>
                      <p className="text-muted-foreground">Registration deadline: June 10</p>
                    </div>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      Register
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS at Regional Invitational</CardTitle>
                  <CardDescription>
                    We're excited to participate in the Regional Invitational, where we'll have the opportunity to
                    compete against the best teams in our region.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">July 1 - July 7</p>
                      <p className="text-muted-foreground">Registration deadline: June 25</p>
                    </div>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      Register
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>VAYU ESPORTS at Global Esports Festival</CardTitle>
                  <CardDescription>
                    We're thrilled to be a part of the Global Esports Festival, where we'll have the chance to showcase
                    our skills on an international stage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">August 1 - August 10</p>
                      <p className="text-muted-foreground">Registration deadline: July 20</p>
                    </div>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      Register
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="youtube" className="py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">VAYU ESPORTS on YouTube</h2>
              <p className="text-muted-foreground">
                Check out our latest videos and highlights on our official YouTube channel.
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="VAYU ESPORTS YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
        <section id="support" className="bg-muted py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Support VAYU ESPORTS</h2>
              <p className="text-muted-foreground">
                Show your support for VAYU ESPORTS and help us continue dominating the esports scene.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Donate</CardTitle>
                  <CardDescription>
                    Your donations will help us fund our operations, training, and participation in tournaments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Donate Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Merchandise</CardTitle>
                  <CardDescription>Show your support by purchasing official VAYU ESPORTS merchandise.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Shop Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sponsorship</CardTitle>
                  <CardDescription>
                    Become a sponsor and help us reach new heights in the esports industry.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Contact Us</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                Get in touch with us for more information or to discuss potential collaborations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>For general inquiries, please email us at info@vayuesports.com</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    info@vayuesports.com
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                  <CardDescription>Connect with us on our social media channels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-4">
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      <InstagramIcon className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      <TwitterIcon className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      <LinkedinIcon className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:underline" prefetch={false}>
                      <YoutubeIcon className="w-6 h-6" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 flex items-center justify-between">
        <p>&copy; 2024 VAYU ESPORTS. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TwitchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
