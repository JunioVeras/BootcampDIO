using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPG.src
{
    public class Wizard : Hero
    {
        public Wizard(string name) : base(name){}

        public override void Attack(Hero player2)
        {
            Console.WriteLine($"{this.name} attacked {player2.name} with his magic!");
            DealsDamage(player2);
        }
    }
}