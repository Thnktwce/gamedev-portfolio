import { games } from './data';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-purple-500">

            {/* Первый экран (Hero) */}
            <header className="flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    Мы создаем <span className="text-purple-500">миры</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mb-8">
                    Независимая студия разработки мобильных игр. Делаем проекты, в которые хочется играть без остановки.
                </p>
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full font-semibold">
                    Посмотреть проекты
                </button>
            </header>

            {/* Секция с играми */}
            <main className="max-w-6xl mx-auto px-4 py-20" id="portfolio">
                <h2 className="text-3xl font-bold mb-10 border-b border-gray-800 pb-4">
                    Наши игры
                </h2>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {games.map((game) => (
                        <div key={game.id} className="bg-gray-900 rounded-2xl overflow-hidden group border border-gray-800 hover:border-purple-500 transition-all duration-300">
                            {/* Картинка-заглушка */}
                            <div className="overflow-hidden">
                                <img
                                    src={game.image}
                                    alt={game.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Описание игры */}
                            <div className="p-6">
                                <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                                    {game.engine}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                                <p className="text-gray-400 mb-6">{game.description}</p>
                                <a
                                    href={game.link}
                                    className="inline-block px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors font-medium"
                                >
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
}