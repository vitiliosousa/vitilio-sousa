import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { googleColors } from "@/data/googleColors";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>🚀 Nova mensagem de {name} - Portfólio Vitilio Sousa</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header com Logo */}
          <Section style={header}>
            <div style={logoContainer}>
              <Text style={{ ...logo, color: googleColors.yellow }}>{"<"}</Text>
              <Text style={{ ...logo, color: googleColors.blue }}>Vitilio</Text>
              <Text style={{ ...logo, color: googleColors.red }}>Sousa</Text>
              <Text style={{ ...logo, color: googleColors.green }}>{"/>"}</Text>
            </div>
            <Text style={tagline}>Desenvolvedor Full-Stack</Text>
          </Section>

          {/* Title com ícone */}
          <Section style={titleSection}>
            <Heading style={heading}>
              <span style={{ color: googleColors.green }}>📧</span>{" "}
              <span style={{ color: googleColors.blue }}>Nova</span>{" "}
              <span style={{ color: googleColors.red }}>mensagem</span>{" "}
              <span style={{ color: googleColors.yellow }}>recebida!</span>
            </Heading>
          </Section>

          {/* Contact Info Cards */}
          <Section style={cardsContainer}>
            {/* Name Card */}
            <div
              style={{ ...card, borderLeft: `4px solid ${googleColors.blue}` }}
            >
              <Text style={cardLabel}>👤 Remetente</Text>
              <Text style={{ ...cardContent, color: googleColors.blue }}>
                {name}
              </Text>
            </div>

            {/* Email Card */}
            <div
              style={{ ...card, borderLeft: `4px solid ${googleColors.red}` }}
            >
              <Text style={cardLabel}>📧 Email</Text>
              <Text style={{ ...cardContent, color: googleColors.red }}>
                {email}
              </Text>
            </div>

            {/* Message Card */}
            <div
              style={{
                ...messageCard,
                borderLeft: `4px solid ${googleColors.green}`,
              }}
            >
              <Text style={cardLabel}>💬 Mensagem</Text>
              <Text style={messageContent}>{message}</Text>
            </div>
          </Section>

          <Hr style={divider} />

          {/* Action Buttons */}
          <Section style={actionsSection}>
            <Text style={actionsTitle}>Ações rápidas:</Text>
            <div style={buttonsContainer}>
              <a
                href={`mailto:${email}`}
                style={{ ...button, backgroundColor: googleColors.blue }}
              >
                📧 Responder
              </a>
            </div>
          </Section>
          <Hr style={divider} />
          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              Esta mensagem foi enviada através do{" "}
              <span style={{ color: googleColors.blue, fontWeight: "bold" }}>
                portfólio online
              </span>{" "}
              de Vitilio Sousa
            </Text>
            <Text style={footerSubtext}>
              🌍 Maputo, Moçambique •
              <span style={{ color: googleColors.green }}>
                {" "}
                Disponível para trabalhar
              </span>
            </Text>
            {/* Tech Stack */}
            <div style={techStack}>
              <Text style={techLabel}>Desenvolvido com:</Text>
              <div style={techBadges}>
                <span
                  style={{
                    ...techBadge,
                    backgroundColor: googleColors.blue + "15",
                    color: googleColors.blue,
                  }}
                >
                  ⚛️ React
                </span>
                <span
                  style={{
                    ...techBadge,
                    backgroundColor: googleColors.green + "15",
                    color: googleColors.green,
                  }}
                >
                  📧 Resend
                </span>
                <span
                  style={{
                    ...techBadge,
                    backgroundColor: googleColors.yellow + "15",
                    color: googleColors.yellow,
                  }}
                >
                  ⚡ Next.js
                </span>
              </div>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f8fafc",
  padding: "20px 0",
  fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight: "1.6",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "0",
  margin: "0 auto",
  maxWidth: "600px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  position: "relative" as const,
  overflow: "hidden" as const,
};

const header = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: "40px 30px",
  textAlign: "center" as const,
};

const logoContainer = {
  marginBottom: "10px",
};

const logo = {
  fontSize: "32px",
  fontWeight: "bold" as const,
  margin: "0",
  display: "inline",
};

const tagline = {
  fontSize: "16px",
  color: "#ffffff",
  margin: "0",
  opacity: 0.9,
  fontWeight: "500" as const,
};

const titleSection = {
  padding: "30px 30px 20px",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold" as const,
  margin: "0",
  lineHeight: "1.3",
};

const cardsContainer = {
  padding: "0 30px",
};

const card = {
  backgroundColor: "#f8fafc",
  padding: "20px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
};

const messageCard = {
  ...card,
  backgroundColor: "#f0fdf4",
  border: "1px solid #bbf7d0",
};

const cardLabel = {
  fontSize: "12px",
  fontWeight: "bold" as const,
  textTransform: "uppercase" as const,
  color: "#64748b",
  margin: "0 0 8px 0",
  letterSpacing: "0.5px",
};

const cardContent = {
  fontSize: "16px",
  fontWeight: "600" as const,
  margin: "0",
  lineHeight: "1.5",
};

const messageContent = {
  fontSize: "16px",
  color: "#1f2937",
  margin: "0",
  lineHeight: "1.6",
  whiteSpace: "pre-wrap" as const,
};

const divider = {
  margin: "30px 0",
  borderColor: "#e2e8f0",
  borderWidth: "1px",
};

const actionsSection = {
  padding: "0 30px",
  textAlign: "center" as const,
};

const actionsTitle = {
  fontSize: "16px",
  fontWeight: "600" as const,
  color: "#374151",
  margin: "0 0 20px 0",
};

const buttonsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap" as const,
};

const button = {
  display: "inline-block",
  padding: "12px 24px",
  borderRadius: "8px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "600" as const,
  fontSize: "14px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

const footerSection = {
  padding: "30px",
  textAlign: "center" as const,
  backgroundColor: "#f8fafc",
  borderTop: "1px solid #e2e8f0",
};

const footerText = {
  fontSize: "14px",
  color: "#64748b",
  margin: "0 0 8px 0",
  lineHeight: "1.5",
};

const footerSubtext = {
  fontSize: "13px",
  color: "#9ca3af",
  margin: "0 0 20px 0",
};

const techStack = {
  marginTop: "20px",
};

const techLabel = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0 0 8px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const techBadges = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  flexWrap: "wrap" as const,
};

const techBadge = {
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "500" as const,
  border: "1px solid transparent",
};
