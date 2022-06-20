using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPG.src
{
    public class Hero
    {
        public string name;
        public int level;
        public int life;
        public int strength;
        public int defense;

        public Hero(string name)
        {
            this.name = name;
            this.level = 1;
            this.life = 300;
            this.strength = 10; 
            this.defense = 10;
        }

        public virtual void Attack(Hero player2)
        {
            Console.WriteLine($"{this.name} attacked {player2.name}");
            DealsDamage(player2);
        }

        protected virtual void DealsDamage(Hero player2)
        {
            Random number = new Random();
            int dodge = number.Next() % player2.defense + 1;
            if(dodge > 5)
            {
                Console.WriteLine($"{this.name} dodge the attack!");
                return;
            }
            player2.life -= this.strength;
        }

        protected virtual void Upgrade()
        {
            this.level++;
            this.life += 50;
            this.strength += 10;
        }

        public virtual bool IsAlive()
        {
            return (this.life > 0) ? true : false;
        }
    }
}