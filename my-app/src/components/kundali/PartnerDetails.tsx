"use client";

import React from "react";
import { TextInput } from "./TextInput";
import { LocationInput } from "./LocationInput";
import { CalendarPicker } from "@/components/ui/CalendarPicker";
import { TimePicker } from "@/components/ui/TimePicker";
import { User } from "lucide-react";

interface PartnerData {
  fullName: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface PartnerDetailsProps {
  title: string;
  type: 'male' | 'female';
  data: PartnerData;
  onChange: (field: keyof PartnerData, value: string) => void;
}

export const PartnerDetails: React.FC<PartnerDetailsProps> = ({
  title,
  type,
  data,
  onChange,
}) => {
  const labelStyle: React.CSSProperties = {
    fontFamily: "'Manrope', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#bcc7de",
    fontWeight: 500,
    marginBottom: "8px",
    display: "block",
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header with icon and title */}
      <div className="flex items-center gap-4">
        <div 
          style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: type === 'male' ? 'rgba(56, 114, 255, 0.1)' : 'rgba(255, 102, 178, 0.1)',
            border: type === 'male' ? '1px solid rgba(56, 114, 255, 0.2)' : '1px solid rgba(255, 102, 178, 0.2)'
          }}
        >
          {type === 'male' ? (
            <span style={{ color: '#5691ff', fontSize: '20px', fontWeight: 'bold' }}>♂</span>
          ) : (
            <span style={{ color: '#ff66b2', fontSize: '20px', fontWeight: 'bold' }}>♀</span>
          )}
        </div>
        <h3
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "18px",
            fontWeight: 600,
            color: "#bcc7de",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Full Name */}
      <TextInput
        label="Full Name"
        placeholder="Enter name"
        value={data.fullName}
        onChange={(value) => onChange("fullName", value)}
      />

      {/* Date & Time Row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label style={labelStyle}>Date of Birth</label>
          <CalendarPicker
            value={data.dateOfBirth}
            onChange={(value) => onChange("dateOfBirth", value)}
          />
        </div>
        <div className="flex flex-col">
          <label style={labelStyle}>Time of Birth</label>
          <TimePicker
            value={data.timeOfBirth}
            onChange={(value) => onChange("timeOfBirth", value)}
          />
        </div>
      </div>

      {/* Place of Birth */}
      <LocationInput
        label="Place of Birth"
        value={data.placeOfBirth}
        onChange={(value) => onChange("placeOfBirth", value)}
      />
    </div>
  );
};