import { faBookOpen, faChalkboard, faChalkboardUser, faChartPie, faCheckToSlot, faCreditCard, faFileInvoice, faFileLines, faFolderOpen, faHome, faMessage, faUserTie } from "@fortawesome/free-solid-svg-icons"

export const stdNav = [
  { name: 'Overview', href: "/student-dashboard/overview", current: true, list: 'both', icon: faHome, subNav : ''},
  { name: 'Admissions', href: "/student-dashboard/admission", current: false, list: '1', icon:faCheckToSlot, subNav : "/personal-info" },
  { name: 'Documentations', href: "/student-dashboard/documentation", current: false, list: '1', icon:faFileLines, subNav : '' },
  { name: 'Payment', href: '/student-dashboard/payment', current: false, list: '1', icon:faCreditCard, subNav : '' },
  { name: 'My Classes', href: '/student-dashboard/my-classes', current: false, list: '2', icon:faChalkboardUser, subNav : '' },
  { name: 'Results/Grades', href: '/student-dashboard/result', current: false, list: '2', icon:faFileInvoice, subNav : '' },
  { name: 'Upcoming Assignments', href: '#', current: false, list: '2', icon:faFolderOpen, subNav : '' },
  { name: 'Syllabus', href: '/student-dashboard/syllabus', current: false, list: '2', icon:faBookOpen, subNav : '' },
  { name: 'Progress Report', href: "/student-dashboard/progress-report", current: '2', list: true, icon:faChartPie, subNav : '' },
  { name: 'Teachers', href: '/student-dashboard/teachers', current: false, list: '2', icon:faUserTie, subNav : '' },
  { name: "FeedBack", href: '/student-dashboard/feedback', current: false, list: 'both', icon:faMessage, subNav : '' },
]
export const facultyNav = [
  { name: 'Overview', href: "/faculty-dashboard/overview", current: true, list: 'both', icon: faHome, subNav : ''},
  { name: 'Classes', href: "/faculty-dashboard/class", current: false, list: 'both', icon:faChalkboard, subNav : '' },
  { name: 'Send Assignments', href: '/faculty-dashboard/assignment', current: false, list: 'both', icon:faFolderOpen, subNav : '' },
  { name: "FeedBack", href: '/faculty-dashboard/feedback', current: false, list: 'both', icon:faMessage, subNav : '' },
]