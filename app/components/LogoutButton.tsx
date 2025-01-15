"use client";

import { logout } from "@/app/auth/actions";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className="btn btn-error"
    >
      Logout
    </button>
  );
} 