


const employees = [
  {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "firstname": "Aarav",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Complete report",
              "description": "Prepare the monthly sales report.",
              "date": "2024-10-28",
              "category": "Sales"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Team meeting",
              "description": "Discuss project progress with the team.",
              "date": "2024-10-26",
              "category": "Meetings"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "title": "Client follow-up",
              "description": "Follow up with client regarding feedback.",
              "date": "2024-10-30",
              "category": "Client Relations"
          }
      ],
      "taskCount": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstname": "Vihan",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Database backup",
              "description": "Schedule and perform database backup.",
              "date": "2024-10-28",
              "category": "IT"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "System update",
              "description": "Update software systems to the latest version.",
              "date": "2024-10-25",
              "category": "Maintenance"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Security audit",
              "description": "Perform a security audit for the application.",
              "date": "2024-10-27",
              "category": "Audit"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstname": "Kiran",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Design mockups",
              "description": "Create mockups for the new product page.",
              "date": "2024-10-29",
              "category": "Design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Client presentation",
              "description": "Present project updates to the client.",
              "date": "2024-10-27",
              "category": "Client Relations"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "title": "Market research",
              "description": "Conduct research on competitor products.",
              "date": "2024-10-30",
              "category": "Research"
          }
      ],
      "taskCount": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstname": "Tanvi",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Invoice processing",
              "description": "Process vendor invoices for payment.",
              "date": "2024-10-25",
              "category": "Finance"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Budget planning",
              "description": "Prepare budget forecast for next quarter.",
              "date": "2024-10-29",
              "category": "Planning"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Team assessment",
              "description": "Assess team performance for Q3.",
              "date": "2024-10-27",
              "category": "HR"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstname": "Mira",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Social media plan",
              "description": "Develop social media plan for the product launch.",
              "date": "2024-10-28",
              "category": "Marketing"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Content review",
              "description": "Review content for the blog.",
              "date": "2024-10-26",
              "category": "Content"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Email campaign",
              "description": "Launch email campaign for product promotion.",
              "date": "2024-10-27",
              "category": "Marketing"
          }
      ],
      "taskCount": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      }
  }
];

const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "firstname": "Raj"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
}
