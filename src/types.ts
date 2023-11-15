export type jobProps = {
  setPage: any;
  page?: number;
  job: any;
};

export type homeProps = {
  setPage: any;
  setSearch: any;
  setSelectedJobId?: any;
  page?: number;
  data?: any[];
};

export type contractProps = {
  setPage: any;
  data?: any[];
  setSelectedJobId: any;
};

export type jobCardProps = {
  employer_name: string;
  job_title: string;
  job_location?: string;
  job_city?: string;
  job_posted_at_timestamp?: number;
  employer_logo: string;
  id: number;
  setPage: any;
  setSelectedJobId: any;
};

export type searchProps = {
  setPage: any;
  search: { mode: string; searchValue: string };
  page?: number;
  data?: any[];
  setData?: any;
  setSelectedJobId: any;
};

export type singleJobType = {
  job: any;
};

export type singleJobAbout = {
  job_text: string[];
};

export type singleJobNavType = {
  job: any;
  setJobText: any;
};
