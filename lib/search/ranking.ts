import Fuse from "fuse.js";

// Mock data structures for the search index
interface SearchableItem {
  id: string;
  type: "member" | "event" | "guide" | "calculator";
  title: string;
  description: string;
  tags: string[];
}

// Initializing fuse instance with configuration
export function initSearch(data: SearchableItem[]) {
  const options = {
    keys: ["title", "description", "tags"],
    includeScore: true,
    threshold: 0.3, // Fuzzy matching threshold
  };
  return new Fuse(data, options);
}

export function performSearch(fuse: Fuse<SearchableItem>, query: string) {
  if (!query) return [];
  const results = fuse.search(query);

  // Custom ranking heuristics could be applied here
  // e.g., boosting 'event' type if the query contains 'event' or current active event
  return results.map(result => result.item);
}
