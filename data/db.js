import { ReactComponent as Paper } from "../src/assets/images/paper.svg";
import { ReactComponent as Client } from "../src/assets/images/client.svg";
import { ReactComponent as Money } from "../src/assets/images/money.svg";
import { ReactComponent as Rates } from "../src/assets/images/rates.svg";
import { ReactComponent as Payouts } from "../src/assets/images/payouts.svg";
import { ReactComponent as Calendar } from "../src/assets/images/calendar.svg";
import { ReactComponent as Auto } from "../src/assets/images/automation.svg";
import { ReactComponent as webdev } from "../src/assets/images/webdev.svg";
import { ReactComponent as domain } from "../src/assets/images/domain.svg";
import { ReactComponent as registration } from "../src/assets/images/registries.svg";
import { ReactComponent as agency } from "../src/assets/images/agencies.svg";
import { ReactComponent as other } from "../src/assets/images/other.svg";
import { ReactComponent as active } from "../src/assets/images/active.svg";
import { ReactComponent as inactive } from "../src/assets/images/inactive.svg";
import { ReactComponent as quote } from "../src/assets/images/quote.svg";
import girlSm from "../src/assets/images/girl-in-glasses-small.png";
import manGrn from "../src/assets/images/man-in-green-tshirt.png";
import manVol from "../src/assets/images/volunteer-tshirt.png";
import girlVol from "../src/assets/images/volunteer-tag.jpg";
import { ReactComponent as up } from "../src/assets/images/chevron-up.svg";
import { ReactComponent as down } from "../src/assets/images/chevron-down.svg";
import techzim from "../src/assets/images/techzim.jpg";
import technomag from "../src/assets/images/technomag.jpg";
import econet from "../src/assets/images/econet.jpg";
import netone from "../src/assets/images/netone.jpg";
import bg from "../src/assets/images/bg.jpg";
import cassava from '../src/assets/images/cassava.jpg';
import fourclrs from '../src/assets/images/fourclrs.jpg';
import eight2five from '../src/assets/images/eight2five.jpg';
import chat263 from '../src/assets/images/263chat.jpg';
import { ReactComponent as Logo } from "../src/assets/images/resellme-logo.svg";
import { ReactComponent as Tabler } from "../src/assets/images/tabler_window.svg";

export const Data = [
  {
    about: [
      {
        title: "How To Get Started",
        button: "GET STARTED",
        start: [
          {
            id: 1,
            icon: Paper,
            title: "Register",
            text: "To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.",
          },
          {
            id: 2,
            icon: Client,
            title: "Find Client",
            text: "Find a client who can be a business owner or a freelancer who wants a website but does not have a domain. \n You take lead to buy the desired domain via ReSellMe for the client upfront.",
          },
          {
            id: 3,
            icon: Money,
            title: "Get Money!",
            text: "You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit. \n Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru",
          },
        ],
      },
    ],
    features: [
      {
        title: "Resellme’s Features",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        feature: [
          {
            title: "Best Purchase Rates",
            icon: Rates,
            text: "You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors",
          },
          {
            title: "Instant Payouts",
            icon: Payouts,
            text: "USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? ",
          },
          {
            title: "No Monthly Commitments",
            icon: Calendar,
            text: "As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.",
          },
          {
            title: "Business Automation",
            icon: Auto,
            text: "Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started",
          },
        ],
      },
    ],
    cases: [
      {
        title: "Resellme’s Use Cases",
        items: [
          {
            icon: webdev,
            title: "Web Development Freelancers",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "READ MORE",
            active: active,
            inActive: inactive,
          },
          {
            icon: domain,
            title: "Small Housing & Domain Registration Companies",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "READ MORE",
            active: active,
            inActive: inactive,
          },
          {
            icon: registration,
            title: "Company Registries",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "READ MORE",
            active: active,
            inActive: inactive,
          },
          {
            icon: agency,
            title: "Small Digital Agencies",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "READ MORE",
            active: active,
            inActive: inactive,
          },
          {
            icon: other,
            title: "Other",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "READ MORE",
            active: active,
            inActive: inactive,
          },
        ],
      },
    ],
    testimonials: [
      {
        title: "Client Testimonials",
        text: "We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.",
        clients: [
          {
            img: girlSm,
            icon: quote,
            name: "Jane Doe",
            company: "company name",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          {
            img: manVol,
            icon: quote,
            name: "John Doe",
            company: "company name",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          {
            img: manGrn,
            icon: quote,
            name: "Jane Doe",
            company: "company name",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
          {
            img: girlVol,
            icon: quote,
            name: "Jane Doe",
            company: "company name",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          },
        ],
      },
    ],
    faq: [
      {
        title: "Frequently Asked Questions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ques: [
          {
            id: 1,
            que: "What Do I Need To Get Started?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            close: down,
            open: up,
          },
          {
            id: 2,
            que: "How Do I Get Paid After Referring A Client?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            close: down,
            open: up,
          },
          {
            id: 3,
            que: "How many People can i refer in a day?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            close: down,
            open: up,
          },
          {
            id: 4,
            que: "do I need a visa card to get paid?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            close: down,
            open: up,
          },
          {
            id: 5,
            que: "Can i refer people to resellme for commission?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            close: down,
            open: up,
          },
        ],
      },
    ],
    featuring: [
      {
        title: "We've Been Featured In",
        features: [
          {
            partner: techzim,
            name: "Techzim",
          },
          {
            partner: technomag,
            name: "TechnoMag",
          },
          {
            partner: econet,
            name: "Econet Wireless Zimbabwe",
          },
          {
            partner: netone,
            name: "Netone Zimbabwe",
          },
          {
            partner: cassava,
            name: "Cassava",
          },
          {
            partner: fourclrs,
            name: "FourColours",
          },
          {
            partner: eight2five,
            name: "Eight2Five",
          },
          {
            partner: chat263,
            name: "263Chat",
          },
        ],
      },
    ],
    signup: [
      {
        title: "You Don't Need Any Credit To Get Started",
        text: "Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.",
        button: "sign up for free",
        bg: bg,
      },
    ],
    partners: [
      {
        title: "Our Partners",
        features: [
          {
            partner: techzim,
            name: "Techzim",
          },
          {
            partner: technomag,
            name: "TechnoMag",
          },
          {
            partner: econet,
            name: "Econet Wireless Zimbabwe",
          },
          {
            partner: netone,
            name: "Netone Zimbabwe",
          },
          {
            partner: cassava,
            name: "Cassava",
          },
          {
            partner: fourclrs,
            name: "FourColours",
          },
          {
            partner: eight2five,
            name: "Eight2Five",
          },
          {
            partner: chat263,
            name: "263Chat",
          },
        ],
      },
    ],
    footer: [
      {
        logo: Logo,
        sitemap: [
          {
            title: "Libraries & Plugins",
            links: [
                { title: "SDKs", "url": "https://classicshumba.co.zw" }, {"title": "WHMCS Plugin", "url": "https://classicshumba.co.zw"}, {"title": "WordPress Plugin", "url": "https://classicshumba.co.zw"}],
          },
          {
            title: "Community",
            links: [{"title": "Facebook", "url": "https://facebook.com/allan.c.shumba", "icon": Tabler}, {"title": "Developer Forums", "url": "https://classicshumba.co.zw", "icon": Tabler}, {"title": "Twitter", "url": "https://twitter.com/shumbazwe.com", "icon": Tabler}],
          },
          {
            title: "More",
            links: [{"title":"SDKs", "url": "https://classicshumba.co.zw"}, {"title": "WHMCS Plugin", "url": "https://classicshumba.co.zw"}, {"title": "WordPress Plugin", "url": "https://classicshumba.co.zw"}],
          },
        ],
      },
    ],
  },
];
