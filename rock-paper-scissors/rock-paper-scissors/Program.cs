using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rock_paper_scissors
{
    class Program
    {
        static void Main(string[] args)
        {
            List<List<KeyValuePair<string, char>>> turnament = new List<List<KeyValuePair<string, char>>>();
            KeyValuePair<string, char> finalWinner = new KeyValuePair<string, char>();
            char[] moves = new char[3] { 'R', 'P', 'S' };
            /*  R beats S; S beats P; and P beats R */
            char[] rBeats = new char[1] { 'S' };
            char[] pBeats = new char[1] { 'R' };
            char[] sBeats = new char[1] { 'P' };

            List<List<KeyValuePair<string, char>>> generateTurnament()
            {

                List<KeyValuePair<string, char>> game1 = new List<KeyValuePair<string, char>>();
                game1.Add(new KeyValuePair<string, char>("Armando", 'P'));
                game1.Add(new KeyValuePair<string, char>("Dave", 'S'));

                Console.WriteLine($"{game1[0].Key} x {game1[1].Key}");

                List<KeyValuePair<string, char>> game2 = new List<KeyValuePair<string, char>>();
                game2.Add(new KeyValuePair<string, char>("Richard", 'R'));
                game2.Add(new KeyValuePair<string, char>("Michael", 'S'));

                Console.WriteLine($"{game2[0].Key} x {game2[1].Key}");

                List<KeyValuePair<string, char>> game3 = new List<KeyValuePair<string, char>>();
                game3.Add(new KeyValuePair<string, char>("Allen", 'S'));
                game3.Add(new KeyValuePair<string, char>("Omer", 'P'));

                Console.WriteLine($"{game3[0].Key} x {game3[1].Key}");

                List<KeyValuePair<string, char>> game4 = new List<KeyValuePair<string, char>>();
                game4.Add(new KeyValuePair<string, char>("David E.", 'R'));
                game4.Add(new KeyValuePair<string, char>("Richard X.", 'P'));

                Console.WriteLine($"{game4[0].Key} x {game4[1].Key}");

                turnament.Add(game1);
                turnament.Add(game2);
                turnament.Add(game3);
                turnament.Add(game4);

                return turnament;
            }

            KeyValuePair<string, char> rps_game_winner(KeyValuePair<string, char> p1, KeyValuePair<string, char> p2)
            {
                KeyValuePair<string, char> winner;

                if (moves.Contains(p1.Value) && (moves.Contains(p2.Value)))
                {
                    if (p1.Value.Equals(p2.Value))
                    {
                        winner = p1;
                    }
                    else
                    {
                        switch (p1.Value)
                        {
                            case 'R':
                                winner = rBeats.Contains(p2.Value) ? p1 : p2;
                                break;
                            case 'P':
                                winner = pBeats.Contains(p2.Value) ? p1 : p2;
                                break;
                            case 'S':
                                winner = sBeats.Contains(p2.Value) ? p1 : p2;
                                break;
                            default:
                                winner = p2;
                                break;
                        }
                    }

                }
                else
                {
                    throw new NoSuchStrategyError("No Such Strategy Error");
                }

                return winner;
            }

            KeyValuePair<string, char> rps_tournament_winner(List<List<KeyValuePair<string, char>>> intTurnament)
            {
                Console.WriteLine("");
                Console.WriteLine("*****Iniciando Torneio*****");

                if (intTurnament.Any(g => g.Count != 2))
                {
                    throw new WrongNumberOfPlayersError("Wrong Number Of Players Error");
                }

                List<List<KeyValuePair<string, char>>> newTurnament = new List<List<KeyValuePair<string, char>>>();

                List<KeyValuePair<string, char>> winners = new List<KeyValuePair<string, char>>();
                foreach (var game in intTurnament)
                {
                    winners.Add(rps_game_winner(game[0], game[1]));
                    Console.WriteLine($"{game[0].Key}[{game[0].Value}] x {game[1].Key}[{game[1].Value}] Ganhador: {winners.Last().Key}");
                }

                if (winners.Count > 1) {
                    for (int i = 0; i < winners.Count; i = i + 2)
                    {
                        List<KeyValuePair<string, char>> game = new List<KeyValuePair<string, char>>();
                        game.Add(winners[i]);
                        game.Add(winners[i + 1]);
                        newTurnament.Add(game);
                    }
                }
                else
                {
                    return winners[0];
                }

                return rps_tournament_winner(newTurnament);
            }

            generateTurnament();
            finalWinner = rps_tournament_winner(turnament);
            Console.WriteLine("");
            Console.WriteLine("*****Fim do Torneio*****");
            Console.WriteLine("");
            Console.WriteLine($"{finalWinner.Key} Ganhou! " );

            Console.ReadLine();
        }
    }

    public class WrongNumberOfPlayersError : Exception
    {
        public WrongNumberOfPlayersError(string message)
            : base(message)
        {

        }
    }

    public class NoSuchStrategyError : Exception
    {
        public NoSuchStrategyError(string message):base(message)
        {

        }
    }
}
