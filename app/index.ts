import { Events, GatewayIntentBits } from "discord.js";
import { GrotCore, Plugin } from "grot-core";

export type AutoroleOptions = {
  onJoinRoles: string[];
};

export class AutorolePlugin implements Plugin {
  name: string = "AutorolePlugin";
  private options: AutoroleOptions;

  requiredIntents?: GatewayIntentBits[] | undefined = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ];

  public constructor(options: AutoroleOptions) {
    this.options = options;
  }

  initialize(core: GrotCore): void {
    const client = core.getClient();

    client.on(Events.GuildMemberAdd, (member) => {
      member.roles.add(this.options.onJoinRoles);
    });
  }
}
