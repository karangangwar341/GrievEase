import React from "react";
import img from "../../../assets/potholes.png";
import ProfileCard from "./ProfileCard";
const YourGrievances = () => {
  const grievances = [
    {
      name: "John Doe",
      department: "Engineering",
      image: img,
      likes: 100,
      by: "Admin",
      date: "April 6, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis porttitor, dolor eu sagittis ultricies, eros lacus auctor odio, eget finibus elit sem in tellus.",
    },
    {
      name: "Jane Smith",
      department: "Marketing",
      image: img,
      likes: 120,
      by: "Manager",
      date: "April 5, 2024",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet metus quis leo dignissim, at posuere nunc efficitur.",
    },
    {
      name: "Alex Johnson",
      department: "Sales",
      image: img,
      likes: 80,
      by: "Supervisor",
      date: "April 4, 2024",
      description:
        "Fusce volutpat odio ut dolor pellentesque eleifend. Nulla facilisi. Donec sed massa non metus sagittis finibus ac et metus. Proin mattis sodales justo.",
    },
  ];
  return (
    <div>
      {grievances.map((post, index) => (
        <ProfileCard key={index} post={post} />
      ))}
    </div>
  );
};

export default YourGrievances;