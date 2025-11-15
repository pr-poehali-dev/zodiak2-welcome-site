import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Собственный магазин",
      description: "Мой персональный магазин с уникальными товарами",
      icon: "ShoppingBag",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Белое облако",
      description: "Проект, который парит в облаках идей и возможностей",
      icon: "Cloud",
      gradient: "from-blue-400 to-purple-400"
    }
  ];

  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    size: Math.random() * 3 + 1
  }));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Добро пожаловать
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-2">
            в Bio Zodiak2
          </p>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-float" />
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 animate-float" style={{ animationDelay: '1s' }} />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Мои проекты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                    <Icon name={project.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary hover:text-accent transition-colors">
                    <span className="text-sm font-medium">Узнать больше</span>
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground text-sm">
            🚀 Explore the cosmos of creativity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
