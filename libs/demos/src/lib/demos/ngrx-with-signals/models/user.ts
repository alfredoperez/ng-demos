/**
 * This is the model returned by the Friend API
 */
export interface User {
  /**
   * Id of the friend
   */
  id: string;

  /**
   * Date the entity was created
   */
  created: Date;

  /**
   * Full name
   */
  name: string;

  /**
   * Email of the user
   */
  email: string;

  /**
   *  Title of the user
   */
  title: string;

  /**
   *  Company of the user
   */
  company: string;
}

export const Companies = ['Acme', 'Globex', 'Soylent', 'Initech'];
