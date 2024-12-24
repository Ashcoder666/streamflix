import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // Allow access if no roles are specified
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Populated by JwtAuthGuard

    if (!user || !requiredRoles.includes(user.USER_TYPE)) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}