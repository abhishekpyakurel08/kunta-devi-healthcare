import { NextResponse } from "next/server";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { diagnostics } from "@/data/diagnostics";
import { healthPackages } from "@/data/packages";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faqs";

const dataStore: Record<string, unknown[]> = {
  doctors,
  services,
  diagnostics,
  packages: healthPackages,
  products,
  blogs: blogPosts,
  faqs,
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ resource: string }> }
) {
  try {
    const { resource } = await params;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const sortField = searchParams.get("sortField") || "";
    const sortOrder = searchParams.get("sortOrder") || "asc";

    const data = dataStore[resource];
    if (!data) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }

    if (id) {
      const item = data.find((x) => (x as { id: string }).id === id);
      if (!item) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
      }
      return NextResponse.json(item);
    }

    // Apply search filter
    let filtered = [...data];
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(item =>
        Object.values(item as Record<string, unknown>).some(value =>
          String(value).toLowerCase().includes(searchLower)
        )
      );
    }

    // Apply sorting
    if (sortField) {
      filtered.sort((a, b) => {
        const aValue = (a as Record<string, unknown>)[sortField];
        const bValue = (b as Record<string, unknown>)[sortField];
        
        if (String(aValue) < String(bValue)) return sortOrder === "asc" ? -1 : 1;
        if (String(aValue) > String(bValue)) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    // Apply pagination
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedData = filtered.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      data: paginatedData,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
