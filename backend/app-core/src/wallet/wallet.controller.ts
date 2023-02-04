import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Query,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { QueryDto } from './dto/query.dto';
// import { AuthenticatedGuard } from '../guard/auth/authenticated.guard';
import { WithdrawDto } from './dto/withdraw.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  // @UseGuards(AuthenticatedGuard)
  @Post('create')
  createWallet(@Request() req, @Body() createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }
}
