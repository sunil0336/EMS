const employees = [
  {
    id: 1,
    name: "Sunil Rathod",
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile the monthly sales report for Q2.",
        date: "2025 june 29",
        category: "Reporting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Meet with client ABC Corp for project review.",
        date: "2025-june-25",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "System Testing",
        description: "Run integration tests on the updated system.",
        date: "2025 june 26",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        title: "Update CRM",
        description: "Update lead information in the CRM database.",
        date: "2025-06-28",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Presentation",
        description: "Design slides for next week's marketing pitch.",
        date: "2025-07-01",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup Database",
        description: "Run a full backup of the client data servers.",
        date: "2025-06-27",
        category: "IT",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Review Applications",
        description: "Screen applicants for the open designer role.",
        date: "2025-06-30",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        title: "Code Review",
        description: "Review the new feature branch code.",
        date: "2025-06-29",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Standup",
        description: "Daily team status meeting.",
        date: "2025-06-30",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve issue where users can't log in.",
        date: "2025-06-28",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Routine check and maintenance of production servers.",
        date: "2025-june-26",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Document API changes for new release.",
        date: "2025-june-30",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Monitor Logs",
        description: "Check logs for potential error patterns.",
        date: "2025-june-29",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create User Guides",
        description: "Write guides for onboarding new clients.",
        date: "2025-july-02",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security Audit",
        description: "Conduct internal audit of user access logs.",
        date: "2025-may-27",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        title: "Design Mockups",
        description: "Create UI mockups for the new mobile app.",
        date: "2025-06-30",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Send Feedback",
        description: "Review and send feedback on submitted proposals.",
        date: "2025-06-28",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test User Flows",
        description: "Test UX flows in latest build.",
        date: "2025-06-29",
        category: "UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
    {
    "id": 0,
    "email": "admin@example.com",
    "password": "1234"
  }
] 

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
}