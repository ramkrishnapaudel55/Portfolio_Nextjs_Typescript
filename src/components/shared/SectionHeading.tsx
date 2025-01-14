const SectionHeading = ({ 
    title, 
    subtitle 
  }: { 
    title: string; 
    subtitle: string; 
  }) => {
    return (
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    );
  };
  
  export default SectionHeading;