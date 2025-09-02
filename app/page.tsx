'use client';

import React, { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">📱 Assyah QuickFix</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">À propos</a>
              <a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition-colors">Tarifs</a>
              <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</a>
              <button className="text-white px-6 py-2 rounded-full btn-premium">
                Devis gratuit
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-b border-gray-800">
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>À propos</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Tarifs</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-indigo-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="w-full mt-4 text-white px-6 py-2 rounded-full btn-premium">
                Devis gratuit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-luxury mb-6">
              Votre téléphone entre
              <span className="block gradient-text">de bonnes mains</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-dark mb-8 max-w-3xl mx-auto">
              Réparation professionnelle et rapide de tous vos appareils mobiles. 
              Expertise technique, garantie qualité, et un soupçon d'humour pour détendre l'atmosphère.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-4 rounded-full text-lg font-semibold btn-premium glow-accent">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-colors">
                Nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">Nos Services</h2>
            <p className="text-xl text-muted-dark">Des réparations qui redonnent vie à vos appareils</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Réparation d'écran */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float">📱</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Réparation d'écran</h3>
              <p className="text-muted-dark mb-6">
                Écran fissuré ? Pas de panique ! Nous redonnons à votre téléphone sa beauté d'antan.
              </p>
              <div className="text-3xl font-bold text-accent mb-2">499 DH</div>
              <p className="text-sm text-gray-500">(ou une demi-âme, selon votre préférence)</p>
            </div>

            {/* Remplacement batterie */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '0.5s'}}>🔋</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Batterie neuve</h3>
              <p className="text-muted-dark mb-6">
                Votre téléphone s'éteint plus vite qu'une bougie dans le vent ? On s'en occupe !
              </p>
              <div className="text-3xl font-bold text-accent mb-2">299 DH</div>
              <p className="text-sm text-gray-500">(finies les prises électriques en otage)</p>
            </div>

            {/* Réparation boutons */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '1s'}}>🔘</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Boutons & Connecteurs</h3>
              <p className="text-muted-dark mb-6">
                Bouton d'alimentation capricieux ? Port de charge rebelle ? Nous les remettons au pas.
              </p>
              <div className="text-3xl font-bold text-accent mb-2">199 DH</div>
              <p className="text-sm text-gray-500">(thérapie de couple incluse)</p>
            </div>

            {/* Réparation caméra */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '1.5s'}}>📸</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Caméra & Objectif</h3>
              <p className="text-muted-dark mb-6">
                Photos floues ? Caméra qui fait grève ? Nous lui redonnons sa vision artistique.
              </p>
              <div className="text-3xl font-bold text-accent mb-2">349 DH</div>
              <p className="text-sm text-gray-500">(retouches Photoshop non comprises)</p>
            </div>

            {/* Nettoyage */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '2s'}}>🧽</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Nettoyage complet</h3>
              <p className="text-muted-dark mb-6">
                Votre téléphone a survécu à un tsunami de café ? Nous le remettons à neuf.
              </p>
              <div className="text-3xl font-bold text-accent mb-2">149 DH</div>
              <p className="text-sm text-gray-500">(shampooing et brushing inclus)</p>
            </div>

            {/* Diagnostic */}
            <div className="dark-card rounded-2xl p-8">
              <div className="text-4xl mb-4 animate-float" style={{animationDelay: '2.5s'}}>🔍</div>
              <h3 className="text-2xl font-bold text-luxury mb-4">Diagnostic complet</h3>
              <p className="text-muted-dark mb-6">
                Problème mystérieux ? Nos experts jouent les détectives pour identifier le coupable.
              </p>
              <div className="text-3xl font-bold text-accent mb-2">GRATUIT</div>
              <p className="text-sm text-gray-500">(loupe et pipe de Sherlock en option)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-muted-dark mb-6">
                Chez <strong className="text-accent">Assyah QuickFix</strong>, nous sommes des passionnés de technologie mobile 
                avec plus de 8 ans d'expérience dans la réparation. Notre mission ? Redonner vie à 
                vos appareils avec professionnalisme, rapidité et une pointe d'humour.
              </p>
              <p className="text-lg text-muted-dark mb-8">
                Nous croyons qu'une réparation réussie, c'est un client satisfait qui repart avec 
                le sourire. Chaque appareil qui passe entre nos mains bénéficie de notre expertise 
                technique et de notre garantie qualité.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2000+</div>
                  <div className="text-muted-dark">Réparations réussies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">24h</div>
                  <div className="text-muted-dark">Délai moyen</div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="dark-card rounded-2xl p-12 glow-accent">
                <div className="text-8xl mb-4 animate-float">🛠️</div>
                <h3 className="text-2xl font-bold text-luxury mb-4">Notre Philosophie</h3>
                <p className="text-muted-dark">
                  "Un téléphone réparé avec soin vaut mieux que deux neufs en panne"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">Notre Processus</h2>
            <p className="text-xl text-muted-dark">Simple, rapide et efficace</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="dark-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-accent">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-luxury mb-4">Diagnostic</h3>
              <p className="text-muted-dark">
                Nous analysons votre appareil pour identifier précisément le problème et vous proposer la meilleure solution.
              </p>
            </div>

            <div className="text-center">
              <div className="dark-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-accent">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-luxury mb-4">Réparation</h3>
              <p className="text-muted-dark">
                Nos techniciens expérimentés procèdent à la réparation avec des pièces de qualité et des outils professionnels.
              </p>
            </div>

            <div className="text-center">
              <div className="dark-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 glow-accent">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-luxury mb-4">Test & Livraison</h3>
              <p className="text-muted-dark">
                Tests complets pour s'assurer que tout fonctionne parfaitement, puis nous vous rendons votre appareil comme neuf !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-darker py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
                Contactez-nous
              </h2>
              <p className="text-lg text-muted-dark mb-8">
                Prêt à redonner vie à votre téléphone ? Contactez-nous pour un devis gratuit 
                ou passez directement à notre atelier !
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="dark-card rounded-full p-3 mr-4 glow-accent">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury">Adresse</h3>
                    <p className="text-muted-dark">123 Avenue Mohammed V, Casablanca</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="dark-card rounded-full p-3 mr-4 glow-accent">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury">Téléphone</h3>
                    <p className="text-muted-dark">+212 6XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="dark-card rounded-full p-3 mr-4 glow-accent">
                    <span className="text-xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury">Horaires</h3>
                    <p className="text-muted-dark">Lun - Sam: 9h - 19h</p>
                    <p className="text-muted-dark">Dim: 10h - 17h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-luxury mb-6">Devis gratuit</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-luxury mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Votre numéro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury mb-2">Type d'appareil</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>iPhone</option>
                    <option>Samsung</option>
                    <option>Huawei</option>
                    <option>Xiaomi</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-luxury mb-2">Description du problème</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Décrivez le problème de votre appareil..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-semibold btn-premium"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-darker border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">📱 Assyah QuickFix</h3>
              <p className="text-muted-dark">
                Votre partenaire de confiance pour la réparation de téléphones. 
                Professionnalisme, rapidité et qualité garantie.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-luxury">Services</h4>
              <ul className="space-y-2 text-muted-dark">
                <li className="hover:text-accent transition-colors cursor-pointer">Réparation d'écran</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Remplacement batterie</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Réparation caméra</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Nettoyage complet</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-luxury">Contact</h4>
              <ul className="space-y-2 text-muted-dark">
                <li className="hover:text-accent transition-colors">📍 123 Avenue Mohammed V, Casablanca</li>
                <li className="hover:text-accent transition-colors">📞 +212 6XX XX XX XX</li>
                <li className="hover:text-accent transition-colors">✉️ contact@assyahquickfix.ma</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-muted-dark">
            <p>&copy; 2025 Assyah QuickFix. Tous droits réservés. | Fait avec ❤️ et beaucoup de café ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
