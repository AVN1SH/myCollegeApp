import { faBookOpen, faChalkboard, faChalkboardUser, faChartPie, faCheckToSlot, faCreditCard, faFileInvoice, faFileLines, faFolderOpen, faHome, faMessage, faUserTie } from "@fortawesome/free-solid-svg-icons"

export const stdNav = [
  { name: 'Overview', href: "/student-dashboard/overview", current: true, list: true, icon: faHome, subNav : ''},
  { name: 'Admissions', href: "/student-dashboard/admission", current: false, list: false, icon:faCheckToSlot, subNav : "/personal-info" },
  { name: 'Documentations', href: "/student-dashboard/documentation", current: false, list: false, icon:faFileLines, subNav : '' },
  { name: 'Payment', href: '/student-dashboard/payment', current: false, list: false, icon:faCreditCard, subNav : '' },
  { name: 'My Classes', href: '/student-dashboard/my-classes', current: false, list: true, icon:faChalkboardUser, subNav : '' },
  { name: 'Results/Grades', href: '/student-dashboard/result', current: false, list: true, icon:faFileInvoice, subNav : '' },
  { name: 'Upcoming Assignments', href: '#', current: false, list: true, icon:faFolderOpen, subNav : '' },
  { name: 'Syllabus', href: '/student-dashboard/syllabus', current: false, list: true, icon:faBookOpen, subNav : '' },
  { name: 'Progress Report', href: "/student-dashboard/progress-report", current: false, list: true, icon:faChartPie, subNav : '' },
  { name: 'Teachers', href: '/student-dashboard/teachers', current: false, list: true, icon:faUserTie, subNav : '' },
  { name: "FeedBack", href: '/student-dashboard/feedback', current: false, list: true, icon:faMessage, subNav : '' },
]
export const facultyNav = [
  { name: 'Overview', href: "/faculty-dashboard/overview", current: true, list: true, icon: faHome, subNav : ''},
  { name: 'Classes', href: "/faculty-dashboard/class", current: false, list: true, icon:faChalkboard, subNav : '' },
  { name: 'Upcoming Assignments', href: '#', current: false, list: true, icon:faFolderOpen, subNav : '' },
  { name: "FeedBack", href: '/faculty-dashboard/feedback', current: false, list: true, icon:faMessage, subNav : '' },
]