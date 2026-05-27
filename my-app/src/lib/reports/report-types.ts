export interface ReportInsight {
  id: string;
  title: string;
  description: string;
  tag?: string;
  icon: string;
}

export interface ReportData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;

  compatibility: string;
  element: string;

  summary: string;

  insights: ReportInsight[];
}