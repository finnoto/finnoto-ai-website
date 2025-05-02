// import {SectionHeader} from "../common/SectionHeader";
import {Container} from "../layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordin";
import {cn} from "@/app/utils/util";

interface FaqCardProps {
  title: string;
  description: string;
}

const faqs: FaqCardProps[] = [
  {
    title: "What is Finnoto and how does it help my business?",
    description:
      "Finnoto is a unified finance automation platform that streamlines Accounts Payable, Accounts Receivable, and Order-to-Cash reconciliation. It reduces manual effort, ensures compliance, and improves financial visibility.",
  },
  {
    title:
      "Is Finnoto suitable for fast-growing or high-transaction businesses?",
    description:
      "Absolutely. Finnoto is built for scale—our clients like Spinny process high transaction volumes daily with a lean finance team using our automation suite.",
  },
  {
    title: "Can I start with only AP or AR and scale later?",
    description:
      "Yes, Finnoto is modular by design. You can start with just AP or AR and expand to include reconciliation, vendor management, and more as your business grows.",
  },
  {
    title: "How long does it take to implement Finnoto?",
    description:
      "Typical implementation takes 2–4 weeks depending on your ERP and selected modules. Our team supports you throughout setup, integration, and training.",
  },
  {
    title: "What marketplaces does your reconciliation tool support?",
    description:
      "We support order and payment reconciliation for Amazon, Flipkart, Myntra, and Shopify. Our engine matches orders, returns, fees, and settlements at SKU and order level.",
  },
  {
    title: "Does Finnoto integrate with my existing systems?",
    description:
      "Yes. Finnoto integrates with ERPs like Tally, Zoho, and SAP; banks like ICICI and HDFC; marketplaces; and tools like Slack, WhatsApp, and Teams.",
  },
  {
    title: "Can I automate payment approvals and invoice processing?",
    description:
      "Yes. Finnoto supports invoice OCR, 3-way PO/GRN matching, and layered approvals through email, WhatsApp, or Slack—cutting down turnaround time dramatically.",
  },
  {
    title: "How does Finnoto help with vendor management?",
    description:
      "Our vendor portal enables secure onboarding, real-time KYC/GST/MSME checks, contract tracking, and performance reviews—streamlining vendor collaboration and compliance.",
  },
  {
    title: "How does Finnoto ensure compliance and audit readiness?",
    description:
      "Finnoto automates GST/TDS validation, MSME classification, approval workflows, and keeps detailed audit trails—ensuring you’re always audit-ready and compliant with tax norms.",
  },
  {
    title: "How is data security and privacy handled",
    description:
      "Finnoto follows SOC 2-compliant, enterprise-grade security practices—including encryption, role-based access, and audit logs—to safeguard all your financial data.",
  },
  {
    title:
      "What is Order-to-Cash Reconciliation and how does it help a D2C brand?",
    description:
      "Order-to-Cash (O2C) Reconciliation helps D2C brands match every order with its corresponding payment, return, shipping fee, and platform deduction across marketplaces and their own website. It ensures accurate revenue recognition, identifies revenue leakages, resolves disputes faster, and accelerates month-end book closure—eliminating the need for manual tracking across Shopify, Amazon, Flipkart, Myntra, and more.",
  },
  {
    title:
      "How does Finnoto reduce manual work in Accounts Payable (AP) and Accounts Receivable (AR)?",
    description:
      "Finnoto automates the end-to-end AP and AR workflows—using OCR for invoice capture, auto 3-way matching, approval routing, and real-time payment tracking. In AR, it eliminates manual invoice generation, follow-ups, and collections using intelligent reminders. For Order-to-Cash Reconciliation, Finnoto replaces tedious Excel-based tracking by integrating directly with marketplaces and order management systems via APIs—automatically reconciling orders, returns, and payments across channels like Shopify, Amazon, Flipkart, and Myntra. This drastically cuts manual effort, prevents revenue leakages, and ensures faster book closure.",
  },
];

const Faq = () => {
  return (
    <Container className="flex flex-col gap-16 mt-32">
      <div className={cn("flex flex-col items-center")}>
        <p
          className={cn(
            "text-base mb-2 md:mb-5 w-fit uppercase font-semibold bg-gradient-to-r from-[#27213E] to-[#4CC3C7] bg-clip-text text-transparent"
          )}
        >
          Faq
        </p>
        <h2
          className={cn(
            "text-2xl md:text-[2.5rem] text-center leading-10 font-semibold mb-5"
          )}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={cn(
            " md:text-[20px] font-medium text-secondary-black text-center"
          )}
        >
          Clear your doubts with us
        </p>
      </div>

      <div>
        <Accordion type="single" className="space-y-7" collapsible>
          {faqs.map((faq) => (
            <AccordionItem
              className="border-2 border-transparent shadow-[0px_5px_16px_0px_rgba(8,15,52,0.06)] rounded-xl px-5 py-6 md:px-14  data-[state=open]:border-secondary data-[state=open]:border-solid data-[state=open]:shadow-[0px_6px_16px_0px_rgba(76,195,199,0.3)]"
              key={faq.title}
              value={faq.title}
            >
              <AccordionTrigger className="p-0">{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export {Faq};
