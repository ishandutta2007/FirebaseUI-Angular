import { UserProfileService } from './user-profile.service';

export const SHARED_SERVICES = [
  { provide: UserProfileService, useClass: UserProfileService },
]