
export const mobilityLevels = {
  easy: "Suitable for all mobility levels",
  moderate: "Some walking required",
  active: "Significant physical activity"
};

export const transportOptions = [
  { id: 'need-ride', label: 'Need a ride' },
  { id: 'can-drive', label: 'Can offer rides' },
  { id: 'public-transit', label: 'Taking public transit' },
  { id: 'own-transport', label: 'Own transportation' }
];

export const upcomingEvents = [
  { 
    title: "Classic Literature Book Club",
    date: "Tomorrow, 2:00 PM",
    participants: 6,
    location: "Community Center, 123 Main St",
    mobility: "easy",
    virtual: false,
    transport: {
      needRide: 2,
      canDrive: 1,
    },
    weather: "Sunny, 72°F",
    description: "Discussing 'Pride and Prejudice' - New members welcome!",
    coordinator: "Sarah Wilson",
    coordinatorPhone: "555-0123"
  },
  {
    title: "Beginner's Piano Session",
    date: "Wednesday, 3:30 PM",
    participants: 4,
    location: "Virtual Meeting",
    mobility: "easy",
    virtual: true,
    description: "Learn basic piano techniques - bring any keyboard!",
    coordinator: "Robert Chen",
    coordinatorPhone: "555-0456"
  },
  {
    title: "Garden Walk & Talk",
    date: "Friday, 1:00 PM",
    participants: 8,
    location: "Botanical Gardens",
    mobility: "moderate",
    virtual: false,
    transport: {
      needRide: 3,
      canDrive: 2,
    },
    weather: "Partly Cloudy, 68°F",
    description: "Gentle walk through the gardens with plant identification",
    coordinator: "Maria Garcia",
    coordinatorPhone: "555-0789"
  },
  {
    title: "Crafting Circle: Holiday Decorations",
    date: "Saturday, 10:00 AM",
    participants: 12,
    location: "Senior Center Craft Room",
    mobility: "easy",
    virtual: false,
    transport: {
      needRide: 4,
      canDrive: 2,
    },
    weather: "Indoor Activity",
    description: "Creating festive decorations - all materials provided",
    coordinator: "Patricia Brown",
    coordinatorPhone: "555-0234"
  },
  {
    title: "Online Chess Club",
    date: "Monday, 4:00 PM",
    participants: 10,
    location: "Virtual Meeting",
    mobility: "easy",
    virtual: true,
    description: "All skill levels welcome - learn and play together",
    coordinator: "David Kumar",
    coordinatorPhone: "555-0567"
  },
  {
    title: "Gentle Morning Yoga",
    date: "Tuesday, 9:00 AM",
    participants: 15,
    location: "Community Center Gym",
    mobility: "moderate",
    virtual: false,
    transport: {
      needRide: 5,
      canDrive: 3,
    },
    weather: "Indoor Activity",
    description: "Chair-supported yoga suitable for all levels",
    coordinator: "Lisa Chen",
    coordinatorPhone: "555-0890"
  },
  {
    title: "History Discussion Group",
    date: "Thursday, 2:30 PM",
    participants: 8,
    location: "Library Meeting Room",
    mobility: "easy",
    virtual: false,
    transport: {
      needRide: 2,
      canDrive: 2,
    },
    weather: "Indoor Activity",
    description: "This week's topic: Local History Stories",
    coordinator: "James Wilson",
    coordinatorPhone: "555-0321"
  },
  {
    title: "Digital Photography Basics",
    date: "Wednesday, 1:00 PM",
    participants: 6,
    location: "Virtual Meeting",
    mobility: "easy",
    virtual: true,
    description: "Learn to take better photos with your smartphone",
    coordinator: "Michael Chang",
    coordinatorPhone: "555-0432"
  },
  {
    title: "Cooking Together: Comfort Foods",
    date: "Friday, 11:00 AM",
    participants: 8,
    location: "Community Kitchen",
    mobility: "easy",
    virtual: false,
    transport: {
      needRide: 3,
      canDrive: 1,
    },
    weather: "Indoor Activity",
    description: "Learn to make classic comfort foods - ingredients provided",
    coordinator: "Emma Rodriguez",
    coordinatorPhone: "555-0765"
  },
  {
    title: "Movie Discussion Group",
    date: "Sunday, 3:00 PM",
    participants: 15,
    location: "Virtual Meeting",
    mobility: "easy",
    virtual: true,
    description: "Discussing this week's selected film: Casablanca",
    coordinator: "Thomas Anderson",
    coordinatorPhone: "555-0543"
  }
];