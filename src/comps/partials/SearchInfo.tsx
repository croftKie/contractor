export default function SearchInfo({ query }: { query: string }) {
  return (
    <div className="searchInfo">
      <h4>{query} Contracts</h4>
      <p>Recent Opportunities</p>
    </div>
  );
}
