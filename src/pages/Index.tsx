import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const ecosystems = [
    {
      title: 'Лесные экосистемы',
      description: 'Тропические и умеренные леса – легкие нашей планеты',
      icon: 'Trees',
      content: 'Леса занимают около 31% поверхности суши и являются домом для 80% наземных видов животных, растений и насекомых.',
      image: 'https://cdn.poehali.dev/projects/df9ffa27-ef2d-406e-9061-5eaa7f15d7dc/files/364bdd90-6891-4308-a5e5-d67776c43bb6.jpg'
    },
    {
      title: 'Водные экосистемы',
      description: 'Океаны, реки и озера – основа жизни на Земле',
      icon: 'Waves',
      content: 'Водные экосистемы производят более половины кислорода на планете и регулируют климат.',
      image: 'https://cdn.poehali.dev/projects/df9ffa27-ef2d-406e-9061-5eaa7f15d7dc/files/abb63103-44d6-417b-9530-d5156a8e6c03.jpg'
    },
    {
      title: 'Степные экосистемы',
      description: 'Травянистые равнины с богатым биоразнообразием',
      icon: 'Wind',
      content: 'Степи и саванны поддерживают уникальные виды травоядных и хищников, играя важную роль в круговороте углерода.'
    },
    {
      title: 'Горные экосистемы',
      description: 'Высокогорья с уникальными климатическими условиями',
      icon: 'Mountain',
      content: 'Горы содержат 25% биоразнообразия суши и являются источником пресной воды для миллиардов людей.',
      image: 'https://cdn.poehali.dev/projects/df9ffa27-ef2d-406e-9061-5eaa7f15d7dc/files/e6657309-fd77-4647-aa05-a886fb638a0a.jpg'
    }
  ];

  const conservationArticles = [
    {
      title: 'Защита редких видов',
      description: 'Программы по сохранению исчезающих животных и растений',
      type: 'article',
      date: '15 ноября 2025'
    },
    {
      title: 'Восстановление лесов',
      description: 'Глобальные инициативы по высадке деревьев',
      type: 'video',
      date: '10 ноября 2025'
    },
    {
      title: 'Очистка океанов',
      description: 'Технологии борьбы с загрязнением морей',
      type: 'article',
      date: '5 ноября 2025'
    },
    {
      title: 'Создание заповедников',
      description: 'Новые охраняемые территории по всему миру',
      type: 'video',
      date: '1 ноября 2025'
    }
  ];

  const biodiversityFacts = [
    {
      fact: 'На Земле насчитывается около 8.7 миллионов видов',
      description: 'Из них описано только 1.2 миллиона'
    },
    {
      fact: 'Тропические леса содержат более 50% видов',
      description: 'При том что занимают только 6% поверхности суши'
    },
    {
      fact: 'Каждый день исчезает до 150 видов',
      description: 'Скорость вымирания в 1000 раз выше естественной'
    },
    {
      fact: 'Насекомые составляют 80% всех видов',
      description: 'Они играют ключевую роль в опылении растений'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sprout" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Экосистема</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('ecosystems')} className="hover:text-primary transition-colors">Экосистемы</button>
              <button onClick={() => scrollToSection('conservation')} className="hover:text-primary transition-colors">Охрана природы</button>
              <button onClick={() => scrollToSection('biodiversity')} className="hover:text-primary transition-colors">Биоразнообразие</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              Сохраним нашу планету вместе
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Исследуйте удивительное разнообразие экосистем Земли и узнайте, как их защитить
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('ecosystems')} className="gap-2">
                <Icon name="Leaf" size={20} />
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="gap-2">
                <Icon name="Mail" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Globe" size={48} className="text-secondary mb-4" />
                <CardTitle>Изучайте</CardTitle>
                <CardDescription>Познавайте разнообразие экосистем нашей планеты</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-accent mb-4" />
                <CardTitle>Защищайте</CardTitle>
                <CardDescription>Участвуйте в сохранении природы</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Объединяйтесь</CardTitle>
                <CardDescription>Станьте частью глобального движения</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="ecosystems" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Экосистемы планеты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая экосистема уникальна и играет важную роль в поддержании жизни на Земле
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ecosystems.map((eco, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={eco.image} alt={eco.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/20 rounded-2xl">
                      <Icon name={eco.icon} size={32} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{eco.title}</CardTitle>
                      <CardDescription className="text-base">{eco.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{eco.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="conservation" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Охрана природы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Статьи и видео о проектах по сохранению окружающей среды
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="articles">Статьи</TabsTrigger>
              <TabsTrigger value="videos">Видео</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {conservationArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={article.type === 'video' ? 'Video' : 'FileText'} size={20} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="ArrowRight" size={16} />
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="articles" className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {conservationArticles.filter(a => a.type === 'article').map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="FileText" size={20} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="ArrowRight" size={16} />
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="videos" className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {conservationArticles.filter(a => a.type === 'video').map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Video" size={20} className="text-secondary" />
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full gap-2">
                      <Icon name="Play" size={16} />
                      Смотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="biodiversity" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Биоразнообразие</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Удивительные факты о разнообразии жизни на Земле
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {biodiversityFacts.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/20 rounded-full mt-1">
                      <Icon name="Sparkles" size={24} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{item.fact}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-secondary/10 border-secondary/30">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Как вы можете помочь?</CardTitle>
                <CardDescription className="text-base max-w-2xl mx-auto mb-6">
                  Каждое действие имеет значение. Начните с малого: сократите использование пластика, 
                  поддерживайте экологические организации, участвуйте в посадке деревьев.
                </CardDescription>
                <Button size="lg" className="gap-2">
                  <Icon name="HandHeart" size={20} />
                  Присоединиться к движению
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Есть вопросы или предложения? Мы всегда рады обратной связи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">Email</CardTitle>
                <CardDescription>info@ecosystem.ru</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-secondary/10 rounded-full w-fit mb-4">
                  <Icon name="Phone" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                <CardDescription>+7 (495) 123-45-67</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto p-4 bg-accent/10 rounded-full w-fit mb-4">
                  <Icon name="MapPin" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                <CardDescription>Москва, ул. Природная, 1</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Напишите нам</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <textarea placeholder="Ваше сообщение..." rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <Button size="lg" className="w-full gap-2">
                <Icon name="Send" size={20} />
                Отправить
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sprout" size={28} />
                <h3 className="text-xl font-bold">Экосистема</h3>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Вместе сохраним нашу планету для будущих поколений
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-primary-foreground transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('ecosystems')} className="hover:text-primary-foreground transition-colors">Экосистемы</button></li>
                <li><button onClick={() => scrollToSection('conservation')} className="hover:text-primary-foreground transition-colors">Охрана природы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Видео</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2025 Экосистема. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;