using System;
using RPG.src;

namespace RPG
{
    class Program
    {
        static void Main(string[] args)
        {
            Wizard player1 = new Wizard("Archeus");
            Warrior player2 = new Warrior("Zeldris");

            int i = 0;
            while(player1.IsAlive() && player2.IsAlive())
            {
                if(i % 2 == 0)
                {
                    player1.Attack(player2);
                }
                else
                {
                    player2.Attack(player1);
                }
                i++;
            }
        }
    }
}
