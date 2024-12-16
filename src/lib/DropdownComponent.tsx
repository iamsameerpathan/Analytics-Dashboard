'use client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function DropdownComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow">
          Sort/Filter
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Sort by Name</DropdownMenuItem>
        <DropdownMenuItem>Filter by Region</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
